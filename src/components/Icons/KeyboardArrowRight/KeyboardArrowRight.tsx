import React from 'react';
import { KeyboardArrowRight as MuiKeyboardArrowRight } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import styled from '../../../styled-components';

const KeyboardArrowRight = styled((props: SvgIconProps) => (
    <MuiKeyboardArrowRight {...props} />
))`
    color: inherit;
`;

export default KeyboardArrowRight;
