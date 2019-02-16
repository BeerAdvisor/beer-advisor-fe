import styled from 'styled-components';
import { Divider as MaterialDivider } from '@material-ui/core';
import { DividerProps } from '@material-ui/core/Divider';

export const VerticalDivider = styled(MaterialDivider as React.FunctionComponent<DividerProps>)`
    width: 10px;
    height: 315px;
    border-radius: 3.6px;
    backgroundColor: #000000;
    margin-bottom: 20px;
`;

export default VerticalDivider;