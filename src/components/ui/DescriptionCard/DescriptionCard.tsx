import React from 'react';
import { Typography } from '@material-ui/core';

import { LogoImage } from '../LogoImage';
import { Rating } from '../Rating';
import { SmallButton } from '../Button';
import { beer_beer } from '../../../@types';
import { FavoriteButton } from '../../Icons';

import {
    DescriptionCardWrapper,
    DescriptionCardTopWrapper,
    DescriptionCardBottomWrapper,
    DescriptionNameValueWrapper,
    DescriptionCardFormLabel,
    FavoriteButtonWrapper,
} from './style';
import { bar_bar } from '../../../@types/__generated__/bar';

export interface DescriptionCardProps {
    beer?: beer_beer;
    // TODO: we dont have type for this now, change it later
    bar?: any;
    onChangeSuggest?: () => void;
    onAddToFavourite?: (id: string) => void;
    ratingComponent: JSX.Element;
}
export const DescriptionCard = ({
    beer,
    bar,
    onChangeSuggest,
    ratingComponent,
    ...other
}: DescriptionCardProps) => {
    return (
        <DescriptionCardWrapper {...other}>
            <FavoriteButtonWrapper>
                    <FavoriteButton />
            </FavoriteButtonWrapper>
            <DescriptionCardTopWrapper>
                <LogoImage />
                <Typography variant="h4">
                    {beer ? beer.name : bar.barName}
                </Typography>
                <Rating filled={beer ? beer.avgRating || 0 : bar.rating} />
            </DescriptionCardTopWrapper>
            <DescriptionCardBottomWrapper>
                {beer && getBeerDescription(beer)}
                {bar && getBarDescription(bar)}
                {ratingComponent}
                <SmallButton onClick={onChangeSuggest} variant="outlined" color="primary">Suggest change</SmallButton>
            </DescriptionCardBottomWrapper>
        </DescriptionCardWrapper>
    );
};

const createDescriptionField = (
    name: string,
    value: string | null | number = 'Unknown'
) => (
    value && 
    <DescriptionNameValueWrapper>
        <DescriptionCardFormLabel>{name}</DescriptionCardFormLabel>
        <Typography variant="body1">{value}</Typography>
    </DescriptionNameValueWrapper>
);

const getBeerDescription = (beer: beer_beer) => (
    <>
        {createDescriptionField(
            'Brewery',
            beer.brewery ? beer.brewery.name : undefined
        )}
        {createDescriptionField('Type', beer.type ? beer.type.name : undefined)}
        {createDescriptionField('ABV', beer.strong)}
        {createDescriptionField('Minimum Price', 'Not known')}
    </>
);

const getBarDescription = (bar: bar_bar) => (
    <>
        {createDescriptionField(
            'Address',
            bar.address
        )}
        {createDescriptionField('Open hours', `${bar.openTime} - ${bar.closeTime}`)}
        {/* TODO: Force in the API */}
        {createDescriptionField('Kitchen', 'Missing in the API')}
        {createDescriptionField('Number of beers', bar.beerList.items ? bar.beerList.items.length : 0)}
    </>
);

export default DescriptionCard;
