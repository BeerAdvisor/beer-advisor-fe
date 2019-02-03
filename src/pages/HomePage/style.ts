import styled from 'styled-components';

export const HomePageContainer = styled.div`
    background-image:
     linear-gradient(#ffcc53, #ffa32d, #e6811e);
`;

export const HeadElementsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const HeadElementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
    @media (max-width: 1550px) {
        width: 85%;
    }
    padding-top: 50px;
    padding-bottom: 100px;
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

export const InfoTextContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-left: 40px;
`;

export const VerticalTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    position: relative;
    top: -10px;
`;
