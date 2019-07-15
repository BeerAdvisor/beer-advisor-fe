import React from 'react';
import { map, memoizeWith, identity } from 'ramda';
import { RouteComponentProps } from 'react-router';
import { History } from 'history';

import { BeerForm, FindBeers, FindBeers_findBeers } from '../../@types';
import { ExpandableInfoList, ExpandedInfoCard, Link } from '../../components';
import { BeerLink } from '../../components/ui/Link/Link';

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

    const expandableInfoCards = memoMapBeerCards(
        history,
        searchResult.findBeers
    );

    return (
        <ExpandableInfoList
            bottomLink="Show bars"
            expandableInfoCards={expandableInfoCards}
            {...other}
        />
    );
};

const bars = [
    {
        name: 'Kozlovna',
        id: 1,
        labelValues: {
            rating: 4,
            price: 2000,
            distance: '1000 M',
        },
    },
    {
        name: 'Mala ryba',
        id: 2,
        labelValues: {
            rating: 3.5,
            price: 2000,
            distance: '12 M',
        },
    },
    {
        name: 'Mila tchyne',
        id: 3,
        labelValues: {
            rating: 4.2,
            price: 2000,
            distance: '300 M',
        },
    },
    {
        name: 'Atmoska',
        id: 4,
        labelValues: {
            rating: 4.3,
            price: 1010,
            distance: '300 M',
        },
    },
    {
        name: 'The Pub',
        id: 5,
        labelValues: {
            rating: 5,
            price: 100,
            distance: '300 M',
        },
    },
    {
        name: 'U Novaku',
        id: 6,
        labelValues: {
            rating: 5,
            price: 10,
            distance: '100 M',
        },
    },
];

const beerSortings = ['price', 'rating', 'distance'];

const mapBeerInfoCards = (
    history: History<any>,
    beers: FindBeers_findBeers[]
) => {
    const handleInfoClick = (beerId: string) => () => {
        history.push(`/form/beer/${beerId}`);
    };

    return map(({ name, avgRating, strong, type, id }: FindBeers_findBeers) => {
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

        return {
            name,
            labelValues,
            rating: avgRating,
            onInfoClick: handleInfoClick(id),
            expandedContent: (
                <ExpandedInfoCard
                    key={id}
                    listName={listHeader}
                    expandedListItems={bars}
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
