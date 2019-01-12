import styled from 'styled-components';

export const RadioButton = styled.div`
    width: 250px;
    height: 50px;
    border-radius: 25px;
    text-align: center;
    background: ${props => props.theme.palette.secondary.main};
`;

export const ToogleButtonContainer = styled.div`
    margin:  40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%
    background: ${props => props.theme.palette.secondary.main};
`;