import styled from 'styled-components';

// TODO: Media queries here
export const MainFormContainer = styled.div`
    box-sizing: border-box; 
    border-radius: 40px;
    width: 70%;
    min-height: 620px;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.palette.secondary.main};
`;

export const FormElementContainer = styled.div`
    width: 85%;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

export const ElementsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

export const SliderContaier = styled.div`
    display: flex;
    justify-content: space-between;
`;
