import React, { useCallback, useState, RefObject } from 'react';
import { Star, StarBorder, StarHalf } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { times } from 'ramda';

import styled from '../../../styled-components';

import { RatingWrapper, ValueContainer } from './style';

export const PrimaryStar = styled((props: SvgIconProps) => (
    <Star {...props} fontSize="inherit" color="primary" />
))`
    width: 1.3rem;
`;

export const PrimaryStarBorder = styled((props: SvgIconProps) => (
    <StarBorder {...props} fontSize="inherit" color="primary" />
))`
    width: 1.3rem;
`;

export interface PrimaryStarEmptyProps extends SvgIconProps {
    hovered?: boolean;
    ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null | undefined;
}
const PrimaryStarEmpty = ({ hovered, ...other }: PrimaryStarEmptyProps) =>
    hovered ? (
        <PrimaryStar {...other} />
    ) : (
        <PrimaryStarBorder {...other} fontSize="inherit" color="primary" />
    );

export const PrimaryStarHalf = styled((props: SvgIconProps) => (
    <StarHalf {...props} fontSize="inherit" color="primary" />
))`
    width: 1.3rem;
`;

export interface RatingProps {
    disabled?: boolean;
    filled?: number;
    onClick?: (rating: number) => void;
}

export const Rating = ({
    disabled = true,
    filled = 0,
    onClick,
    ...other
}: RatingProps) => {
    const [activeItems, setActiveItems] = useState(-1);
    const [clicked, setClicked] = useState(false);
    let counter = 0;

    const handleHover = useCallback(
        hoveredItem => () => {
            if (!disabled && !clicked) {
                setActiveItems(() => hoveredItem);
            }
        },
        [clicked, disabled]
    );

    const handleBlur = useCallback(
        () => {
            if (!disabled && !clicked) {
                setActiveItems(() => -1);
            }
        },
        [clicked, disabled]
    );

    const handleClick = useCallback(() => {
        if (!disabled) {
            if (onClick) {
                onClick(activeItems + 1);
            }

            setClicked(c => !c);
        }        
    }, [activeItems, disabled]);

    const generateRating = useCallback(
        (hoveredItem: number) => {
            const key = `rating-${hoveredItem}`;
            if (!disabled) {
                return (
                    <PrimaryStarEmpty
                        key={key}
                        hovered={hoveredItem <= activeItems}
                        onMouseEnter={handleHover(hoveredItem)}
                        onClick={handleClick}
                    />
                );
            }

            if (disabled) {
                const leftToFill = filled - counter;
                if (
                    leftToFill < 1 &&
                    leftToFill > 0 &&
                    filled % counter > 0.5
                ) {
                    counter++;
                    return <PrimaryStarHalf key={key} />;
                }

                if (filled > counter) {
                    counter++;
                    return <PrimaryStar key={key} />;
                }

                counter++;
                return <PrimaryStarEmpty key={key} />;
            }
        },
        [disabled, activeItems, counter, filled, handleBlur, handleHover, handleClick]
    );

    return (
        <RatingWrapper disabled={disabled} onMouseLeave={handleBlur} {...other}>
            {times(generateRating, 5)}
            <ValueContainer>{disabled ? filled : activeItems + 1}</ValueContainer>
        </RatingWrapper>
    );
};

export default Rating;
