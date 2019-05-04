import React from 'react';

import { Query, GET_BEER_INFO } from '../../graphql';
import { DescriptionCard, Carousel } from '../../components';
import { beer } from '../../@types';
import { GuaranteedQueryResult } from '../../@types/CustomGqlTypes';

import { BeerDescriptionCardContainer } from './style';

export interface BeerDescriptionCardProps {
    beerId: string;
}

const DUMMY_CAROUSEL_CARD = [
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Kozlovna',
        cardValue: '40CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Kozlovna',
        cardValue: '40CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Kozlovna',
        cardValue: '40CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Kozlovna',
        cardValue: '40CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Kozlovna',
        cardValue: '40CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Kozlovna',
        cardValue: '40CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Kozlovna',
        cardValue: '40CZK',
    },
    {
        imageUrl: 'https://praga-praha.ru/wp-content/uploads/2016/10/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-Kozlovna-u-Paukerta-7.jpg',
        cardName: 'Kozlovna',
        cardValue: '40CZK',
    },
];

export const BeerDescriptionCard = ({
    beerId,
    ...other
}: BeerDescriptionCardProps) => {
    return (
        <Query query={GET_BEER_INFO} variables={{ beerId }}>
            {({ data }: GuaranteedQueryResult<beer>) => (
                <BeerDescriptionCardContainer>
                    <DescriptionCard beer={data.beer} {...other} />
                    <Carousel cards={DUMMY_CAROUSEL_CARD} />
                </BeerDescriptionCardContainer>
            )}
        </Query>
    );
};

export default BeerDescriptionCard;
