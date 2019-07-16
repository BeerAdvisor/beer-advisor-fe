import styled from '../../styled-components';
import { SMALL_BP_DOWN } from '../../theme';

export const DescriptionChildrenWrapper = styled.div`
    margin-left: 3rem;
    margin-right: 1rem;
    ${SMALL_BP_DOWN} {
        margin-left: 0;
        margin-right: 0;
    }
`;

export const DescriptionCardContainer = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    ${SMALL_BP_DOWN} {
        flex-direction: column;
        padding: 0 1rem;
        &>* {
            margin-bottom: 1rem;
        }
    }
`;