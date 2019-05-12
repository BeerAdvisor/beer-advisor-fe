import SwipeableViews from 'react-swipeable-views';

import styled from '../../styled-components';

export const SwitchWrapper = styled.div`
    margin-bottom: 1rem;
`;

export const StyledSwipeableViews = styled(SwipeableViews)`
    box-shadow: ${props => props.theme.surfaces.shadow_1};
    border-radius: ${props => props.theme.borderRadius};
    width: 100%;
`;

interface CombinedFormsContainerProps { 
    variant?: 'small';
}
export const CombinedFormsContainer = styled.div<CombinedFormsContainerProps>`
    ${props => props.variant === 'small' ? `
        max-width: 20%;
        min-width: 20rem;
    ` :
    `
        max-width: 39rem;
        margin: 0 auto;
        padding-top: 2rem;
    `}
`;
