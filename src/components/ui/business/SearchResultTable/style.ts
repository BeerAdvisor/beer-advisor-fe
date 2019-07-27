import { Table } from '@material-ui/core';

import styled from '../../../../styled-components';
import { Card } from '../../../../commonStyles';

export const SerachResultTableWrapper = styled(Table)`
    ${Card}
    box-shadow: none;
    border-radius: 20px;
    padding: 1.5rem 2rem;
    border-collapse: unset;
`;
