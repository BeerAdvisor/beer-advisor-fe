import React, { ReactNode } from 'react';
import { Typography } from '@material-ui/core';
import { map, memoizeWith, identity } from 'ramda';
import isEmpty from 'ramda/es/isEmpty';

import { SmallButton } from '../../common/Button';
import { CarouselCardProps } from '../../common/CarouselCard';
import { useMobileDevice, useTabletDevice, useNotebookDevice } from '../../../../utils';

import { AvailabilityCardWrapper, ButtonWrapper, SortingLink, SortingLinksWrapper, AvailabilityCarousel} from './style';

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
    carouselCards: CarouselCardProps[];
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

    if (isEmpty(carouselCards)) {
        // TODO: Design for this fallback
        return (
        <AvailabilityCardWrapper {...other}>
            <Typography variant="h4">Help us find where we can taste this beer</Typography>
            <SmallButton variant="outlined">Add bar</SmallButton>
        </AvailabilityCardWrapper>
        );
    }

    return (
        <AvailabilityCardWrapper {...other}>
            <Typography variant="body1">{carouselHeader}</Typography>
            <AvailabilityCarousel cards={carouselCards} maxToShow={itemsToShow} />
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
