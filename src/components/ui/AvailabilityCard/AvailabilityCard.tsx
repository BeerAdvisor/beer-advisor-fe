import React from 'react';
import { Typography } from '@material-ui/core';
import { map, memoizeWith, identity } from 'ramda';

import { Carousel } from '../Carousel';
import { SmallButton } from '../Button';

import { AvailabilityCardWrapper, ButtonWrapper, SortingLink, SortingLinksWrapper, CarouselWrapper} from './style';

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

const mapSortedLinks = (sortingLinks: SortingLink[]) => map(({ name, handler, selected }: SortingLink) => (
    <SortingLink key={name}selected={selected} onClick={handler}>{name}</SortingLink>
))(sortingLinks);

// Does not work, why?
// const memoizedMapSortedLinks = memoizeWith(identity, mapSortedLinks);

export interface SortingLink {
    name: string;
    handler: () => void;
    selected?: boolean;
}

export interface AvailabilityCardProps {
    sortingLinks?: SortingLink[];
    buttonClick?: () => void;
}
const AvailabilityCard = ({ sortingLinks, buttonClick, ...other }: AvailabilityCardProps) => {
    return (
        <AvailabilityCardWrapper {...other}>
            <Typography variant="body1">This beer in bars</Typography>
            {/* <CarouselWrapper> */}
                <Carousel cards={DUMMY_CAROUSEL_CARD} />
            {/* </CarouselWrapper> */}
                {sortingLinks && <SortingLinksWrapper>Sort by:{mapSortedLinks(sortingLinks)}</SortingLinksWrapper>}
            <ButtonWrapper>
                <SmallButton onClick={buttonClick} variant="outlined" color="secondary">Show all bars</SmallButton>
            </ButtonWrapper>
        </AvailabilityCardWrapper>
    );
};

export default AvailabilityCard;
