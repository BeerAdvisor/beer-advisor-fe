import styled from 'styled-components';

export const InfoTextContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    position: relative;
    right: 5%;
`;

export const TopDownLeter = styled.div`
    transform: translate(-5%, -7%) rotate(-180deg);
`;

export const ButtonTextContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const OpportunitiesSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%
    margin-bottom: 100px;
`;

export const VerticalTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    position: relative;
    top: -10px;
`;

export const ExamplesContainer = styled.div`
    display: flex;
    margin-left: 20px;
    flex-direction: column;
    *:not(:first-child) {
        margin-top: 25px;
    }
`;
