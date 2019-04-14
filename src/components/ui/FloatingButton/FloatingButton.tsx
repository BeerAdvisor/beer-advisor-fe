import { FunctionComponent } from 'react';
import MuiFloatingButton, { FabProps } from '@material-ui/core/Fab';

import styled from '../../../styled-components';

const FloatingButton = styled(MuiFloatingButton as FunctionComponent<FabProps>)`
    background-color: transparent;
    border: 1px solid ${props => props.theme.palette.secondary.main};
    box-shadow: none;
`;

export default FloatingButton;
