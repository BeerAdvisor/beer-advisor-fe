import styled from '../../../styled-components';

export const SearchResulCardStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 8.5rem;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    &:first-child {
        border-radius: ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0 0;
    }
    &:last-child {
        border-radius: 0 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius};
    }
    &:only-child {
        border-radius: ${props => props.theme.borderRadius};

    }
    

    background-color: ${props => props.theme.palette.light};
`;

export const SearchResultContainer = styled.div`
    display: flex;
    padding: 0 3rem;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
`;

export const SearchResultColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const SearchResultRow = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const SearchResultBigValue = styled.span`
    font-size: 24px;
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
    margin: 1rem 3rem 1rem 0;
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
