import styled from '../../../styled-components';

export const StyledCarouselCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${props => props.theme.palette.light};

    border-radius: 10px;
    width: 10rem;
    height: 12rem;
    padding: 1rem;
    box-shadow: ${props => props.theme.surfaces.shadow_1};
    box-sizing: border-box;

    color: ${props => props.theme.palette.secondary.main};
    font-size: .78rem;

    &>*:not(:first-child) {
        margin-top: .2rem;
    }
`;

export const CarouselCardImage = styled.img`
    width: 100%;
    height: 70%;

    border-radius: 10px;
`;
