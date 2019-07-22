import React from 'react';
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase';

import { Search } from '../../../Icons';
import styled from '../../../../styled-components';

export const SearchInputElement = styled((props: InputBaseProps) => (
    <InputBase {...props} classes={{ input: 'input' }} />
))`
    background-color: transparent;
    max-width: 80%;
    box-shadow: none;
    border: 0;
    min-height: 0;
    margin-top: 0;

    & .input {
        padding: 0;
    }
`;

export const SearchInputIcon = styled(Search)`
    font-size: 1rem;
    position: relative;
    top: 5%;
`;
