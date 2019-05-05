import styled from '../../../styled-components';

export const CarouselContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    &>*:not(:first-child) {
        margin-left: 1rem;
    }
`;

export const CarouselWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;
