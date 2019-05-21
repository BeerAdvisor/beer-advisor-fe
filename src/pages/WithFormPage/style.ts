import styled from '../../styled-components';
import { SMALL_BP_UP } from '../../theme';

export const WithFormPageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    ${SMALL_BP_UP} {
        padding: ${props => props.theme.combinedPadding}
    }
`;
