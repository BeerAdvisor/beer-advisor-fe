import SwipeableViews from 'react-swipeable-views';

import { SMALL_BP_DOWN } from '../../theme';
import styled from '../../styled-components';

export const SwitchWrapper = styled.div`
    margin-bottom: 1rem;
`;

export const StyledSwipeableViews = styled(SwipeableViews)`
    border-radius: ${props => props.theme.borderRadius};
    width: 100%;
`;

interface CombinedFormsContainerProps { 
    variant?: 'small';
}
export const CombinedFormsContainer = styled.div<CombinedFormsContainerProps>`
    box-shadow: ${props => props.theme.surfaces.shadow_1};
    min-width: 20rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box; 
    border-radius: ${props => props.theme.borderRadius};
    width: 100%;
    min-height: 31rem;
    overflow-x: hidden;
    background-color: ${props => props.theme.palette.light};
    padding: 2rem;
    ${SMALL_BP_DOWN} {
        height: 100%;
        justify-content: space-around;
    }

    max-width: 39rem;
    margin: 0 auto;

    ${props => props.variant === 'small' && `
        max-width: 20%;
    `}
`;
