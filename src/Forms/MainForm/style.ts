import styled from 'styled-components';

// TODO: Media queries here
export const MainFormContainer = styled.div`
    box-sizing: border-box; 
    border-radius: 40px;
    padding: 0 110px;
    width: 100%;
    height: 720px;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.palette.secondary.main};
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

// TODO: Media queries here
export const ButtonContainer = styled.div`
    width: 560px;
`;
