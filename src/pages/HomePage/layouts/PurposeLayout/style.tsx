import styled from 'styled-components';

export const InfoTextContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    position: absolute;
    left: 20px;
`;

export const PurposeLayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%
`;

export const VerticalTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    position: relative;
    top: -10px;
`;

export const ImageContainer = styled.div`
    width: 65%;
    @media (max-width: 1550px){
        width: 50%;
    }
`;
