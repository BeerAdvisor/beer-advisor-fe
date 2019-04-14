import React, { MouseEventHandler } from 'react';

import styled from '../../../styled-components';
import { KeyboardArrowRight } from '../KeyboardArrowRight';

const ArrowsWrapper = styled.div`
    display: flex;
    position: relative;
    left: 2rem;
    cursor: pointer;
`;

const MainArrowWrapper = styled.div`
    position: relative;
    right: 0;
`;

const SecondArrowWrapper = styled(MainArrowWrapper)`
    right: 1.6rem;
`;

export interface DoubleKeyboardArrowRightProps {
    onClick?: MouseEventHandler;
}
export default (props: DoubleKeyboardArrowRightProps) => {

    return (
        <ArrowsWrapper {...props}>
            <MainArrowWrapper>
                <KeyboardArrowRight />
            </MainArrowWrapper>
            <SecondArrowWrapper>
                <KeyboardArrowRight />
            </SecondArrowWrapper>
        </ArrowsWrapper>
    );
};
