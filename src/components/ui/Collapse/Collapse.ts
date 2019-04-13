import { FunctionComponent } from 'react';
import MuiCollapse, { CollapseProps } from '@material-ui/core/Collapse';

import styled from '../../../styled-components';

const Collapse = styled(MuiCollapse as FunctionComponent<CollapseProps>)`
    width: 100%;
`;

export default Collapse;
