import styled from 'styled-components';

export interface MainFormContainerProps {
    variant?: 'small';
}

// TODO: Media queries here
export const MainFormContainer = styled.div<MainFormContainerProps>`
    box-sizing: border-box; 
    border-radius: 40px;
    width: 100%;
    min-height: 562px;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.palette.secondary.main};
    padding-bottom: 40px;
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
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -10px;
`;
