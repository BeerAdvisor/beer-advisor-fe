import React from 'react';
import { Typography } from '@material-ui/core';

import { Carousel } from '../Carousel';
import { SmallButton } from '../Button';

import { AvailabilityCardWrapper, ButtonWrapper } from './style';

const DUMMY_CAROUSEL_CARD = [
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Kozlovna',
        cardValue: '100CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Atmoska',
        cardValue: '38CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'The pub',
        cardValue: '98CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Once upon a beer',
        cardValue: '40CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Zhopa',
        cardValue: '40CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Another bar',
        cardValue: '40CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Another bar another',
        cardValue: '38CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Kozlovna',
        cardValue: '35CZK',
    },
];

const AvailabilityCard = () => {
    return (
        <AvailabilityCardWrapper>
            <Typography variant="body1">This beer in bars</Typography>
            <Carousel cards={DUMMY_CAROUSEL_CARD} />
            <ButtonWrapper>
                <SmallButton variant="outlined" color="secondary">Show all bars</SmallButton>
            </ButtonWrapper>
        </AvailabilityCardWrapper>
    );
};

export default AvailabilityCard;
