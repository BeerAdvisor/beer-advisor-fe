import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image:
     linear-gradient(#ffcc53, #ffa32d, #e6811e);
`;

export const Zhopa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
    @media (max-width: 1550px) {
        width: 85%;
    }
    padding-top: 50px;
`;