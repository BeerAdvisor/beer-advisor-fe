import React from 'react';
import { KeyboardArrowUp as MuiKeyboardArrowUp } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import styled from '../../../styled-components';

const KeyboardArrowUp = styled((props: SvgIconProps) => (
    <MuiKeyboardArrowUp {...props} />
))`
    color: ${props => props.theme.palette.secondary.main};
    width: 1em;
`;

export default KeyboardArrowUp;
