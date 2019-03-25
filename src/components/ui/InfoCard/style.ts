import styled from '../../../styled-components';

export const InfoCardStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 8.5rem;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.theme.palette.light};

    &:first-child {
        border-radius: ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0 0;
    }

    &:last-child {
        border-radius: 0 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius};
    }

    &:only-child {
        border-radius: ${props => props.theme.borderRadius};

    }

`;

export const InfoCardContainer = styled.div`
    display: flex;
    cursor: pointer;
    position: absolute;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 3rem;
    box-sizing: border-box;
`;

export const InfoCardColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const InfoCardRow = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const InfoCardBigValue = styled.span`
    font-size: 1.3rem;
    font-family: Raleway;
    font-weight: 600;
    color: #000000;
`;

export const LabelValueContainer = styled.span`
    &:not(:first-child) {
        margin-left: 2rem;
    }
`;

export const LeftDetailContainer = styled.div`
    width: 6rem;
    height: 6rem;
    margin-right: 3rem;
    border-radius: 50%;
    background-color: gray;
`;

export const RightDetail = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    align-self: flex-end;
    width: 3rem;
    background-color: ${props => props.theme.palette.primary.light};
    border-radius: 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0;
    cursor: pointer;
`;

export const BottomLink = styled.span`
    position: relative;
    left: 45%;
    bottom: 5%;
    cursor: pointer;
    font-size: 0.8rem;
    text-decoration: underline;
    color: ${props => props.theme.palette.secondary.main}
    align-self: flex-end;
`;
