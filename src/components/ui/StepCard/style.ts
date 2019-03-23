import styled from 'styled-components';

import { LARGE_BP_DOWN, MEDIUM_BP_DOWN } from '../../../theme';

export const StepCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    ${LARGE_BP_DOWN} {
        width: 150px;
    }
    ${MEDIUM_BP_DOWN} {
        width: 120px;
    }
    height: 220px;
    background-color: ${props => props.theme.palette.light};
    color: ${props => props.theme.palette.textColor};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: 2.6px 3.1px 10.3px 0.7px rgba(0, 0, 0, 0.1);
    padding: 20px 30px;
    margin 0 20px;
`;