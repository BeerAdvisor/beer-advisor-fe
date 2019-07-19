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
import {
    suggestChange,
    beer_beer_beerComments,
    beer_beer,
} from '../../@types';
import { GuaranteedQueryResult } from '../../@types/CustomGqlTypes';
import { SortingLink } from '../../components/ui/business/AvailabilityCard/AvailabilityCard';
import { SuggestChange } from '../../forms/SuggestChange';
import { VerticalFlexBoxWithMargin } from '../../commonStyles';
import { CommentsBox } from '../../components/ui/business/CommentsBox/CommentsBox';
import { LeaveRating } from '../LeaveRating';
import { LeaveBeerComment } from '../LeaveBeerComment';
import { DescriptionChildrenWrapper, DescriptionCardContainer } from '../common';

import { SUGGEST_BEER_CHANGE_QUERY } from './graphql';

export interface BeerDescriptionCardProps extends RouteComponentProps {
    beerId: string;
    beer: beer_beer;
}
export const BeerDescriptionCard = ({
    beerId,
    beer,
    history,
    ...other
}: BeerDescriptionCardProps) => {
    const [selected, setSelected] = useState(0);
    const [beerEditMode, setBeerEditMode] = useState(false);

    const handleSetBeerEditMode = useCallback(
        () => setBeerEditMode(editMode => !editMode),
        []
    );
    const handleSorting = useCallback(
        () => setSelected(s => (s === 0 ? 1 : 0)),
        []
    );
    const handleShowAllBars = useCallback(
        () => history.push(`/form/beers/${beerId}`),
        []
    );

    const sortingLinks: SortingLink[] = [
        { name: 'Cost', handler: handleSorting, selected: selected === 0 },
        { name: 'Distance', handler: handleSorting, selected: selected === 1 },
    ];

    const availabilityCardButtonProps = {
        onClick: handleShowAllBars,
        children: 'Show all bars',
        color: 'secondary',
    };

    const { includedIn: items } = beer;
    const carouselItems = items 
    ? items.map(({ beerList: { bar }, price }) => bar && ({
        id: bar.id,
        imageUrl: bar.photos && bar.photos[0] || undefined,
        cardName:  bar.name,
        cardValue: `${price}CZK`,
    }))
    : [];

    return (
                <DescriptionCardContainer>
                    <Fade in={!beerEditMode}>
                        {!beerEditMode ? (
                            <DescriptionChildrenWrapper>
                                <DescriptionCard
                                    onChangeSuggest={handleSetBeerEditMode}
                                    beer={beer}
                                    ratingComponent={
                                        <LeaveRating isBeer id={beer.id} />
                                    }
                                    {...other}
                                />
                            </DescriptionChildrenWrapper>
                        ) : (
                            <div />
                        )}
                    </Fade>
                    <Fade in={beerEditMode}>
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
                                            beer={beer}
                                            onClear={handleSetBeerEditMode}
                                            {...other}
                                        />
                                    </DescriptionChildrenWrapper>
                                )}
                            </Query>
                        ) : (
                            <div />
                        )}
                    </Fade>
                    <VerticalFlexBoxWithMargin style={{ width: '100%' }}>
                        <AvailabilityCard
                            carouselHeader={`${beer.name} in bars`}
                            buttonProps={availabilityCardButtonProps}
                            sortingLinks={sortingLinks}
                            // Wrong typing are comming from BE
                            // @ts-ignore
                            carouselCards={carouselItems}
                        />
                        <CommentsBox>
                            <LeaveBeerComment id={beer.id} />
                            {beer.beerComments 
                            ? map<
                                beer_beer_beerComments,
                                JSX.Element
                            >(({ user, comment, id }) => (
                                <CommentCard
                                    key={id}
                                    author={user ? user.nickname : 'Guest'}
                                    comment={comment}
                                />
                            ))(beer.beerComments)
                            : <span>{`Be the first to leave a comment about ${beer.name}`}</span>
                        }
                        </CommentsBox>
                    </VerticalFlexBoxWithMargin>
                </DescriptionCardContainer>
    );
};

export default BeerDescriptionCard;
