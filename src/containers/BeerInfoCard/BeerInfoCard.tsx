import React from 'react';
import { map, memoizeWith, identity } from 'ramda';
import { RouteComponentProps } from 'react-router';
import { History } from 'history';
import isEmpty from 'ramda/es/isEmpty';

import { BeerForm, FindBeers, FindBeers_findBeers } from '../../@types';
import { ExpandableInfoList, ExpandedInfoCard, Link } from '../../components';
import { BeerLink, BarLinkBold } from '../../components/ui/common/Link/Link';

export interface BeerRouteParams {
    beerId: string;
}

export type BeerInfoProps = {
    searchResult: FindBeers;
    // TODO: this has to be deleted once graphql will resolve it's typing issues
    mutate: any;
} & BeerForm &
    RouteComponentProps<BeerRouteParams>;

export const BeerInfoCard = ({
    searchResult,
    history,
    ...other
}: BeerInfoProps) => {
    if (!searchResult.findBeers) {
        return null;
    }

    const expandableInfoCards = mapBeerInfoCards(
        history,
        searchResult.findBeers
    );

    return (
        <ExpandableInfoList
            bottomLink="Show bars"
            color="secondary"
            expandableInfoCards={expandableInfoCards}
            {...other}
        />
    );
};

const beerSortings = ['price', 'rating', 'distance'];

const mapBeerInfoCards = (
    history: History<any>,
    beers: FindBeers_findBeers[]
) => {
    const handleInfoClick = (beerId: string) => () => {
        history.push(`/form/beer/${beerId}`);
    };

    return map(({ name, avgRating, strong, photo, type, id, includedIn }: FindBeers_findBeers) => {
        const labelValues = [
            { label: 'Rating', value: avgRating },
            { label: 'Strong', value: strong },
            { label: 'Type', value: type ? type.name : null },
        ];
        const listHeader = (
        <>
            Bars where you can find{' '}
            <BeerLink to={`/form/beer/${id}`}>{name}</BeerLink>
        </>
        );

        let expandedListItems;
        if (includedIn && !isEmpty(includedIn)) {
            expandedListItems = includedIn.map(({ beerList: { bar: { id: barId, name: barName, avgRating: barRating } }, price }) => ({
                id: barId,
                name: barName,
                link: <BarLinkBold to={`/form/bar/${barId}`}>{barName}</BarLinkBold>,
                labelValues: {
                    price,
                    rating: barRating,
                    distance: 'To be implemented',
                },
            }));
        }

        return {
            name,
            labelValues,
            avatar: photo || '',
            rating: avgRating,
            onInfoClick: handleInfoClick(id),
            expandedContent: (
                <ExpandedInfoCard
                    key={id}
                    listName={listHeader}
                    expandedListItems={expandedListItems}
                    sortings={beerSortings}
                />
            ),
        };
    }, beers);
};

const memoMapBeerCards = memoizeWith(
    identity,
    mapBeerInfoCards
);

export default BeerInfoCard;
