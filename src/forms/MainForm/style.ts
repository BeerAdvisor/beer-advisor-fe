import styled from 'styled-components';

export interface MainFormContainerProps {
    variant?: 'small';
}

export const MainFormContainer = styled.div<MainFormContainerProps>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box; 
    border-radius: ${props => props.theme.borderRadius};
    width: 100%;
    min-width: 20rem;
    min-height: 31rem;
    overflow-x: hidden;
    background-color: ${props => props.theme.palette.light};
    padding: 0 2rem 2rem;
`;

export const MainFormContainerStub = styled(MainFormContainer)`
    justify-content: center;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
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
