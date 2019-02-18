import { Divider as MaterialDivider } from '@material-ui/core';
import { DividerProps } from '@material-ui/core/Divider';

import styled from '../../../styled-components';

export const BasicDivider = styled(MaterialDivider as React.FunctionComponent<DividerProps>)`
    width: 100px;
    height: 8px;
    border-radius: 3.6px;
    background-color: #000000;
    margin-bottom: 20px;
`;

export default BasicDivider;
