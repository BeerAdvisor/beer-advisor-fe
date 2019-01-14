import styled from 'styled-components';

export const ElementsContainer = styled.div`
    display flex;
    flex-direction: column;
    justify-content: center;
    margin:  40px 0;
`;

export const ToogleButtonContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    width: 100%;
    background: ${props => props.theme.palette.secondary.main};
    margin-top: 10px;
`;