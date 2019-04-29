import React from 'react';
import { Typography } from '@material-ui/core';

import { LogoImage } from '../LogoImage';
import { Rating } from '../Rating';
import { LittleButton, SmallButton } from '../Button';
import { beer_beer } from '../../../@types';

import {
    DescriptionCardWrapper,
    DescriptionCardTopWrapper,
    DescriptionCardBottomWrapper,
    DescriptionNameValueWrapper,
    RatingWrapper,
    LeaveRatingWrapper,
} from './style';

export interface DescriptionCardProps {
    beer?: beer_beer;
    // TODO: we dont have type for this now, change it later
    bar?: any;
    onChangeSuggest?: () => void;
    onAddToFavourite?: (id: string) => void;
}
export const DescriptionCard = ({
    beer,
    bar,
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
                <SmallButton favourite variant="outlined">Add to favourite</SmallButton>
            </DescriptionCardTopWrapper>
            <DescriptionCardBottomWrapper>
                {beer && getBeerDescription(beer)}
                <RatingWrapper>
                    Your rating:
                    <LeaveRatingWrapper>
                        <Rating disabled={false} />
                        <LittleButton>Confirm</LittleButton>
                    </LeaveRatingWrapper>
                </RatingWrapper>
                <SmallButton variant="outlined">Suggest change</SmallButton>
            </DescriptionCardBottomWrapper>
        </DescriptionCardWrapper>
    );
};

const createDescriptionField = (
    name: string,
    value: string | null = 'Unknown'
) => (
    <DescriptionNameValueWrapper>
        <Typography variant="subtitle2">{`${name}:`}&nbsp;</Typography>
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
        {createDescriptionField('Alchol Perception', beer.strong)}
        {createDescriptionField('Minimum Price', 'Not known')}
    </>
);

export default DescriptionCard;
