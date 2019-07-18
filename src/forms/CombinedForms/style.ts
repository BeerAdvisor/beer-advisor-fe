import SwipeableViews from 'react-swipeable-views';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';

import { SMALL_BP_DOWN } from '../../theme';
import styled from '../../styled-components';
import { Card } from '../../commonStyles';

export const RightCornerIconButton = styled<any>(IconButton)`
    position: absolute;
    z-index: 1100;
    top: 2%;
    right: 2%;
    padding: 0;
`;

export const SwitchWrapper = styled.div`
    margin-bottom: 1rem;
    width: 100%;
`;

export const StyledSwipeableViews = styled(SwipeableViews)`
    border-radius: ${props => props.theme.borderRadius};
    width: 100%;
`;

interface CombinedFormsContainerProps { 
    variant?: 'small';
}
export const CombinedFormsWrapper = styled.div<CombinedFormsContainerProps>`
    min-width: 20rem;
    max-width: 39rem;
    min-height: 31rem;
    margin: 2rem auto 0;

    &>*:first-child {
        margin-bottom: 1rem;
    }


    ${props => props.variant === 'small' && `
        max-width: 20%;
        margin: 0 auto;
    `}
`;

export const CombinedFormsContainer = styled.div`
    ${Card};
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
    padding: 2rem;
    ${SMALL_BP_DOWN} {
        height: 100%;
        justify-content: flex-start;
    }
`;
