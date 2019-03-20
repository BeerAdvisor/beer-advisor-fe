import styled from '../../../styled-components';

export const SearchResulCardStyled = styled.div`
    max-width: 70rem;
    height: 8.5rem;
    width: 100%;
    box-sizing: border-box;
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.palette.secondary.main};
    padding: 1rem 3rem;
`;

export const SearchResultContainer = styled.div`
    display: flex;
    justify-content: space-between;
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