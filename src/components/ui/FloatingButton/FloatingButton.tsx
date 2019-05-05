import { FunctionComponent } from 'react';
import MuiFloatingButton, { FabProps } from '@material-ui/core/Fab';

import styled from '../../../styled-components';

const FloatingButton = styled(MuiFloatingButton as FunctionComponent<FabProps>)`
    background-color: ${props => props.theme.palette.secondary.main};
    border: 1px solid ${props => props.theme.palette.secondary.main};
    box-shadow: none;
    color: ${props => props.theme.palette.light};

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

    &:hover {
        background-color: ${props => props.theme.palette.secondary.dark};
        border-color: ${props => props.theme.palette.secondary.dark};
    }
`;

export default FloatingButton;
