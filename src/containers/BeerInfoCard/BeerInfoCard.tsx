import React from 'react';
import { map, memoizeWith, identity } from 'ramda';

import { BeerForm, FindBeers, FindBeers_findBeers } from '../../@types';
import { ExpandableInfoList } from '../../components';

export type BeerInfoProps = {
    searchResult: FindBeers;
} & BeerForm;

export const BeerInfoCard = ({ searchResult, ...other }: BeerInfoProps) => {
    if (!searchResult.findBeers) {
        return null;
    }

    const expandableInfoCards = mapBeerInfoCards(searchResult.findBeers);

    return <ExpandableInfoList bottomLink="Show bars" expandableInfoCards={expandableInfoCards} {...other} />;
};

const mapBeerInfoCards = memoizeWith(identity, 
    map(({ name, avgRating, strong, type }: FindBeers_findBeers) => {
    const labelValues = [
        { label: 'Rating', value: avgRating },
        { label: 'Strong', value: strong },
        { label: 'Type', value: type ? type.name : null },
    ];

    return { name, labelValues };
}));

export default BeerInfoCard;
