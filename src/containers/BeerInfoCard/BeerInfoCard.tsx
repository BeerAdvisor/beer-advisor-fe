import React from 'react';

import { BeerForm, FindBeers } from '../../@types';

export type BeerInfoProps = {
    searchResult: FindBeers;
} & BeerForm;

export const BeerInfoCard = ({ searchResult }: BeerInfoProps) => {

    return searchResult.findBeers && <div>{JSON.stringify(searchResult.findBeers)}</div>;
};

export default BeerInfoCard;
