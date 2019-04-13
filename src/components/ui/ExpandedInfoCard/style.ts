import styled from '../../../styled-components';

export const ExpandedInfoCardWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2rem 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.palette.light}90;
`;

export const ListItemsContainer = styled.div`
    margin-top: 1.5rem;
    width: 100%;
`;
