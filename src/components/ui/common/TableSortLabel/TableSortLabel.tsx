import { TableSortLabel as MuiTableSortLabel } from '@material-ui/core';

import styled from '../../../../styled-components';

const TableSortLabel = styled(MuiTableSortLabel)`
    & .MuiTableSortLabel-active {
        color: yellow;
    }
`;

export default TableSortLabel;
