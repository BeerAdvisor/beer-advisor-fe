import styled from '../../../styled-components';

export const AvailabilityCardWrapper = styled.div`
    max-width: 49rem;
    height: 22rem; 
    width: 100%;
    background-color: ${props => props.theme.palette.light};
    border-radius: ${props => props.theme.borderRadius}
    padding: 2rem 1rem;
    box-shadow: ${props => props.theme.surfaces.shadow_1};

    box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
    max-width: 15rem;
    width: 100%;
`;
