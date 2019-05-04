import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { map } from 'ramda';

import { CarouselCard, CarouselCardProps } from '../CarouselCard';
import { mapIndexed } from '../../../utils';

import { CarouselContainer } from './style';

export interface CarouselProps {
    cards: CarouselCardProps[];
    maxToShow?: number;
}
const Carousel = ({ cards, maxToShow = 4, ...other }: CarouselProps) => {
    const [activeValue, setActiveValue] = useState(0);
    const [carouselItems, setCarouselItems] = useState<CarouselCardProps[][]>([]);

    useEffect(() => {
        const localCarouselItems: CarouselCardProps[][]= [];
        let oneSlide: CarouselCardProps[]= [];
        mapIndexed((card, index) => {
                if (index === maxToShow || index === cards.length - 1) {
                    localCarouselItems.push(oneSlide);
                    oneSlide = [];
                }

                if (index === cards.length - 1) {
                    setCarouselItems(localCarouselItems);
                }
            
                oneSlide.push(card);
            } 
        )(cards);
    }, [cards]);

    const handleClick = () => activeValue < 1 ? setActiveValue(a => a + 1) : setActiveValue(a => a - 1);

    return (
        <div {...other} >
            <SwipeableViews
                axis={'x'}
                index={activeValue}
                onChangeIndex={setActiveValue}
                containerStyle={{width: '100%'}}
                style={{width: '100%'}}
            >
            {mapIndexed((carouselCards: CarouselCardProps[], higherIndex) => (
                <CarouselContainer key={`-.-${higherIndex}`} onClick={handleClick}>
                    {mapIndexed(({ imageUrl, cardName, cardValue }: CarouselCardProps, index) => (
                        (index < maxToShow) && 
                            <CarouselCard
                                key={`${cardName}${index}`}
                                imageUrl={imageUrl}
                                cardName={cardName}
                                cardValue={cardValue}
                            />
                    ))(carouselCards)}
                </CarouselContainer>
            )
            )(carouselItems)}
            </SwipeableViews>
        </div>
    );
};

export default Carousel;
