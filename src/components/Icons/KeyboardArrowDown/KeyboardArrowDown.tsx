import React from 'react';
import { KeyboardArrowDown as MuiKeyboardArrowDown } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import styled from '../../../styled-components';

const KeyboardArrowDown = styled((props: SvgIconProps) => (
    <MuiKeyboardArrowDown {...props} />
))`
    color: ${props => props.theme.palette.secondary.main};
    width: 1em;
`;

export default KeyboardArrowDown;
