import styled from 'styled-components';

export interface MainFormContainerProps {
    variant?: 'small';
}

export const MainFormToogleButtonGroupFieldWrapper = styled.div`
    margin-top: 1.5rem;
`;

export const MainFormContainer = styled.div<MainFormContainerProps>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box; 
    overflow-x: hidden;
    background-color: transparent;
    padding: 0 .2rem;
`;

export const MainFormContainerStub = styled(MainFormContainer)`
    justify-content: center;
    align-items: center;
    min-width: 20rem;
    min-height: 31rem;
`;

export const ButtonWrapper = styled.div`
    align-self: center;
    margin-top: 2rem;
    max-width: 18rem;
    width: 100%;
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
`;
