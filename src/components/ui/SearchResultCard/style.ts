import styled from '../../../styled-components';

export const SearchResulCardStyled = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 100px;
    border-radius: 40px;
    background-color: ${props => props.theme.palette.secondary.main};
    padding: 10px 20px;
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

export const SearchResultBigValue = styled.span`
    font-family: Staatliches;
    letter-spacing: 0.6px;
    line-height: 1.5;
    font-size: 24px;
    color: #ffc12f;
`;