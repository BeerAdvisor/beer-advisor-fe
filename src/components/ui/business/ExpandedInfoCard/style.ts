import styled from '../../../../styled-components';
import { SMALL_BP_DOWN } from '../../../../theme';
import { ToogleButtonGroup } from '../../common/ToogleButton';

export const ExpandedInfoCardWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.palette.light}90;

    ${SMALL_BP_DOWN} {
        position: relative;
        top: -6%;
        padding: 1.5rem 2rem;
    }
`;

export const ListItemsContainer = styled.div`
    margin-top: 1.5rem;
    width: 100%;

    &: >* {
        margin-top: .5rem;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 1rem;
`;

export const ExpandedToggleButtonGroup = styled(ToogleButtonGroup)`
    ${SMALL_BP_DOWN} {
        flex-wrap: nowrap;
        justify-content: stretch;
    }
`;
