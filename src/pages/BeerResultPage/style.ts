import styled from 'styled-components';

import { SMALL_BP_UP } from '../../theme';

export const BeerResultContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    ${SMALL_BP_UP} {
        width: 100%;
    }
`;

export const SearchResultContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 1rem;
    width: 100vw;
    ${SMALL_BP_UP} {
        width: 100%;
        margin-left: 3rem;
    }
`;