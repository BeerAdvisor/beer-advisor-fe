import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Fade } from '@material-ui/core';
import { map } from 'ramda';

import { Query } from '../../graphql';
import {
    DescriptionCard,
    AvailabilityCard,
    CommentCard,
} from '../../components';
import { SortingLink } from '../../components/ui/AvailabilityCard/AvailabilityCard';
import { SuggestChange } from '../../forms/SuggestChange';
import { VerticalFlexBoxWithMargin } from '../../commonStyles';
import { CommentsBox } from '../../components/ui/CommentsBox/CommentsBox';
import { LeaveRating } from '../LeaveRating';
import {
    DescriptionCardContainer,
    DescriptionChildrenWrapper,
} from '../common';
import { SUGGEST_BEER_CHANGE_QUERY } from '../BeerDescriptionCard/graphql';
import { bar_bar, bar_bar_barComments } from '../../@types/__generated__/bar';
import { LeaveBarComment } from '../LeaveBarComment';

export interface BeerDescriptionCardProps extends RouteComponentProps {
    barId: string;
    bar: bar_bar;
}
export const BarDescriptionCard = ({
    barId,
    bar,
    history,
    ...other
}: BeerDescriptionCardProps) => {
    const [selected, setSelected] = useState(0);
    const [barEditMode, setBarEditMode] = useState(false);

    const handleSetBeerEditMode = useCallback(
        () => setBarEditMode(editMode => !editMode),
        []
    );
    const handleSorting = useCallback(
        () => setSelected(s => (s === 0 ? 1 : 0)),
        []
    );
    const handleShowAllBeers = useCallback(
        () => history.push(`/form/bars/${barId}`),
        []
    );

    const sortingLinks: SortingLink[] = [
        { name: 'Price', handler: handleSorting, selected: selected === 0 },
        { name: 'Rating', handler: handleSorting, selected: selected === 1 },
    ];

    const availabilityCardButtonProps = {
        onClick: handleShowAllBeers,
        children: 'Show all beers',
        color: 'primary',
    };

    const { beerList: { items } } = bar;
    const carouselItems = items 
    ? items.map(({ beer: { photo, name }, price }) => ({
        imageUrl: photo || undefined,
        cardName: name,
        cardValue: `${price}CZK`,
    }))
    : [];

    return (
                <DescriptionCardContainer>
                    <Fade in={!barEditMode}>
                        {!barEditMode ? (
                            <DescriptionChildrenWrapper>
                                <DescriptionCard
                                    onChangeSuggest={handleSetBeerEditMode}
                                    bar={bar}
                                    ratingComponent={
                                        <LeaveRating id={bar.id} />
                                    }
                                    {...other}
                                />
                            </DescriptionChildrenWrapper>
                        ) : (
                            <div />
                        )}
                    </Fade>
                    {/* <Fade in={beerEditMode}>
                        {beerEditMode ? (
                            <Query query={SUGGEST_BEER_CHANGE_QUERY}>
                                {({
                                    data: {
                                        beerTypes: beerTypesData,
                                        breweries,
                                    },
                                }: GuaranteedQueryResult<suggestChange>) => (
                                    <DescriptionChildrenWrapper>
                                        <SuggestChange
                                            beerTypes={beerTypesData}
                                            breweries={breweries}
                                            beer={bar}
                                            onClear={handleSetBeerEditMode}
                                            {...other}
                                        />
                                    </DescriptionChildrenWrapper>
                                )}
                            </Query>
                        ) : (
                            <div />
                        )}
                        </Fade> */ }
                    <VerticalFlexBoxWithMargin style={{ width: '100%' }}>
                        <AvailabilityCard
                            carouselHeader={`Beers you can find in ${bar.name}`}
                            sortingLinks={sortingLinks}
                            buttonProps={availabilityCardButtonProps}
                            carouselCards={carouselItems}
                        />
                        <CommentsBox>
                            <LeaveBarComment id={bar.id} />
                            {bar.barComments 
                            ? map<
                                bar_bar_barComments,
                                JSX.Element
                            >(({ user, comment, id }) => (
                                <CommentCard
                                    key={id}
                                    author={user ? user.nickname : 'Guest'}
                                    comment={comment}
                                />
                            ))(bar.barComments)
                            : <span>{`Be the first to leave a comment about ${bar.name}`}</span>
                        } 
                    </CommentsBox>
                    </VerticalFlexBoxWithMargin>
                </DescriptionCardContainer>
    );
};

export default BarDescriptionCard;
