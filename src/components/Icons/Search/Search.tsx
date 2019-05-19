import React from 'react';
import { Search as MuiSearch } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import styled from '../../../styled-components';

const Search = styled((props: SvgIconProps) => (
    <MuiSearch {...props} />
))`
    color: inherit;
    width: 1.5em;
`;

export default Search;
