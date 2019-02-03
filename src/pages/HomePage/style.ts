import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image:
     linear-gradient(#ffcc53, #ffa32d, #e6811e);
`;

export const HeadElementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
    @media (max-width: 1550px) {
        width: 85%;
    }
    padding: 50px 0;
`;

export const HorizontalContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 50px;
`;

export const RevertedTextWrapper = styled.span`
    display: inline-block;
    margin-right: 40px;

    width: 144px;
`;

export const FormWrapper = styled.div`
    width: 100%;
    min-width: 400px;
`;
