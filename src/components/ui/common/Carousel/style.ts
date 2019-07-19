import styled from '../../../../styled-components';

export interface CarouselContainerProps {
    // there should be a better way, animation sucks then... virtualize hoc?
    hide?: boolean;
}
export const CarouselContainer = styled.div<CarouselContainerProps>`
    display: ${props => props.hide ? 'none' : 'flex'};
    justify-content: flex-start;
    padding: 1rem;
    overflow: hidden;
    box-sizing: border-box;
    &>*:not(:first-child) {
        margin-left: 1rem;
    }
`;

export const CarouselWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`;
