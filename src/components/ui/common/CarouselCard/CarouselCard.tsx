import React from 'react';

import { StyledCarouselCard, CarouselCardImage } from './style';

export interface CarouselCardProps {
    id?: string;
    cardName: string;
    cardValue: string;
    imageUrl?: string;
}
const CarouselCard = ({ cardName, cardValue, imageUrl, ...other }: CarouselCardProps) => {

    return (
        <StyledCarouselCard {...other}>
            <CarouselCardImage src={imageUrl} />
            <span> 
                {cardName}
            </span>
            <span>
                {cardValue}
            </span>
        </StyledCarouselCard>
    );
};

export default CarouselCard;
