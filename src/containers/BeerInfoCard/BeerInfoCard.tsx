import React from 'react';

import { BeerForm, FindBeers } from '../../@types';

export type BeerInfoProps = FindBeers & BeerForm;

export const BeerInfoCard = ({ data }: BeerInfoProps) => {

    // @ts-ignore
    return data && <div>{JSON.stringify(data)}</div>;
};

export default BeerInfoCard;
