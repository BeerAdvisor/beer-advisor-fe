import styled from 'styled-components';

export const HorizontalImage = styled.img`
    width: 100%;
    border-radius: ${props => props.theme.borderRadius};
    max-height: 230px;
    
    margin-top: 3.4em;
`;

export const HorizontalImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    height: 100%;
    width: 100%;
`;
