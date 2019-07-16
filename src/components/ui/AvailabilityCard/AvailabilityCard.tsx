import React, { ReactNode } from 'react';
import { Typography } from '@material-ui/core';
import { map, memoizeWith, identity } from 'ramda';

import { SmallButton } from '../Button';
import { CarouselCardProps } from '../CarouselCard';
import { useMobileDevice, useTabletDevice, useNotebookDevice } from '../../../utils';

import { AvailabilityCardWrapper, ButtonWrapper, SortingLink, SortingLinksWrapper, AvailabilityCarousel} from './style';

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

interface AvailabilityCardButtonProps {
    onClick: () => void;
    children: string;
    color: string;
}

export interface AvailabilityCardProps {
    sortingLinks?: SortingLink[];
    carouselHeader?: ReactNode;
    buttonProps: AvailabilityCardButtonProps;
    carouselCards?: CarouselCardProps[];
}
const useItemsToShow = () => {
    let itemsToShow = 4;

    if (useNotebookDevice()) {
        itemsToShow = 3;
    }
    if (useTabletDevice()) {
        itemsToShow = 2;
    }
    if (useMobileDevice()) {
        itemsToShow = 1;
    }

    return itemsToShow;
};

const AvailabilityCard = ({ sortingLinks, carouselCards, buttonProps, carouselHeader, ...other }: AvailabilityCardProps) => {
    const itemsToShow = useItemsToShow();

    return (
        <AvailabilityCardWrapper {...other}>
            <Typography variant="body1">{carouselHeader}</Typography>
            <AvailabilityCarousel cards={carouselCards ? carouselCards : DUMMY_CAROUSEL_CARD} maxToShow={itemsToShow} />
            {sortingLinks && 
                <SortingLinksWrapper>Sort by:{mapSortedLinks(sortingLinks)}</SortingLinksWrapper>
            }
            <ButtonWrapper>
                <SmallButton {...buttonProps} variant="outlined" />
            </ButtonWrapper>
        </AvailabilityCardWrapper>
    );
};

export default AvailabilityCard;
