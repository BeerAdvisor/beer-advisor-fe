import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { CarouselCard, CarouselCardProps } from '../CarouselCard';
import { mapIndexed } from '../../../utils';
import { FloatingButton } from '../FloatingButton';
import { KeyboardArrowLeft, KeyboardArrowRight } from '../../Icons';

import { CarouselContainer, CarouselWrapper } from './style';

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
        let cardsCounter = 0;
        mapIndexed((card, actualIndex) => {
                if (cardsCounter === maxToShow) {
                    cardsCounter = 0;
                    localCarouselItems.push(oneSlide);
                    oneSlide = [];
                }

                oneSlide.push(card);

                if (actualIndex === cards.length - 1) {
                    localCarouselItems.push(oneSlide);
                    setCarouselItems(localCarouselItems);
                }

                cardsCounter++;
            } 
        )(cards);
    }, [cards, maxToShow]);

    const handleRightClick = () => (activeValue !== carouselItems.length - 1) && setActiveValue(a => a + 1);
    const handleLeftClick = () => activeValue !== 0 && setActiveValue(a => a - 1);

    return (
        <CarouselWrapper {...other} >
            <FloatingButton disabled={activeValue === 0} onClick={handleLeftClick} size="small">
                <KeyboardArrowLeft />
            </FloatingButton>
            <SwipeableViews
                axis={'x'}
                index={activeValue}
                onChangeIndex={setActiveValue}
                style={{width: '100%'}}
            >
            {mapIndexed((carouselCards: CarouselCardProps[], higherIndex) => (
                <CarouselContainer hide={higherIndex !== activeValue} key={`-.-${higherIndex}`}>
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
            <FloatingButton disabled={activeValue === carouselItems.length - 1} onClick={handleRightClick} size="small">
                <KeyboardArrowRight />
            </FloatingButton>
        </CarouselWrapper>
    );
};

export default Carousel;
