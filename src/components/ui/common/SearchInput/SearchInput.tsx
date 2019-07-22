import React, { ChangeEvent } from 'react';

import { SearchInputElement, SearchInputIcon } from './style';

export interface SearchInputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput = ({ onChange, ...other }: SearchInputProps) => (
    <>
    <SearchInputElement {...other} placeholder="Search" onChange={onChange} />
    <SearchInputIcon />
    </>
);

export default SearchInput;
