import React from 'react';
import { Clear as MuiClear } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import styled from '../../../styled-components';

const Clear = styled((props: SvgIconProps) => (
    <MuiClear {...props} />
))`
    color: inherit;
    width: .8em;
`;

export default Clear;
