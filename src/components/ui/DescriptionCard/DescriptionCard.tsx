import React from 'react';
import { Typography } from '@material-ui/core';

import { LogoImage } from '../LogoImage';
import { Rating } from '../Rating';
import { SmallButton } from '../Button';
import { beer_beer } from '../../../@types';

import {
    DescriptionCardWrapper,
    DescriptionCardTopWrapper,
    DescriptionCardBottomWrapper,
    DescriptionNameValueWrapper,
    DescriptionCardFormLabel,
} from './style';

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
            <DescriptionCardTopWrapper>
                <LogoImage />
                <Typography variant="h4">
                    {beer ? beer.name : bar.barName}
                </Typography>
                <Rating filled={beer ? beer.avgRating || 0 : bar.rating} />
            </DescriptionCardTopWrapper>
            <DescriptionCardBottomWrapper>
                {beer && getBeerDescription(beer)}
                {ratingComponent}
                <SmallButton onClick={onChangeSuggest} variant="outlined" color="primary">Suggest change</SmallButton>
            </DescriptionCardBottomWrapper>
        </DescriptionCardWrapper>
    );
};

const createDescriptionField = (
    name: string,
    value: string | null = 'Unknown'
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

export default DescriptionCard;
