import { Divider as MaterialDivider } from '@material-ui/core';
import { DividerProps } from '@material-ui/core/Divider';

import styled from '../../../styled-components';

export const BasicDivider = styled(MaterialDivider as React.FunctionComponent<DividerProps>)`
    width: 100%;
    margin: 1rem 0;
    height: 1px;
    background-color: ${props => props.theme.palette.dividerColor};
`;

export default BasicDivider;
