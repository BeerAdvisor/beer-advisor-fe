import { FunctionComponent } from 'react';
import MuiFloatingButton, { FabProps } from '@material-ui/core/Fab';

import styled from '../../../styled-components';

const FloatingButton = styled(MuiFloatingButton as FunctionComponent<FabProps>)`
    background-color: ${props => props.theme.palette.secondary.main};
    border: 1px solid ${props => props.theme.palette.secondary.main};
    box-shadow: none;
    color: ${props => props.theme.palette.light};

    &:hover {
        background-color: ${props => props.theme.palette.secondary.dark};
        border-color: ${props => props.theme.palette.secondary.dark};
    }

    ${props => props.color === 'primary' && `
        background-color: ${props.theme.palette.primary.main};
        border: 1px solid ${props.theme.palette.primary.main};

        &:hover {
            background-color: ${props.theme.palette.primary.dark};
            border-color: ${props.theme.palette.primary.dark};
        }
    `}

    &:disabled {
        cursor: not-allowed;
        background-color: transparent;
        border-color: #DBDBDB;
        color: #DBDBDB;
    }

    ${props => props.size === 'small' && `
        min-height: unset;
        width: 25px;
        height: 25px;
    `}
`;

export default FloatingButton;
