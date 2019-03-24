import React from 'react';
import { ArrowRight as MuiArrowRight } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import styled from '../../../styled-components';

export const ArrowRight = styled((props: SvgIconProps) => (
    <MuiArrowRight classes={{ fontSizeLarge: 'fontSizeLarge' }} {...props} />
))`
    color: white;

    & .fontSizeLarge {
        font-size: 3rem,
    }
`;

export default ArrowRight;
