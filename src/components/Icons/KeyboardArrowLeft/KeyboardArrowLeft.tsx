import React from 'react';
import { KeyboardArrowLeft as MuiKeyboardArrowLeft } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import styled from '../../../styled-components';

const KeyboardArrowLeft = styled((props: SvgIconProps) => (
    <MuiKeyboardArrowLeft {...props} />
))`
    color: inherit;
`;

export default KeyboardArrowLeft;
