import styled from '../../../styled-components';

export const CarouselContainer = styled.div`
    display: flex;
    &>*:not(:first-child) {
        margin-left: 1rem;
    }
`;
