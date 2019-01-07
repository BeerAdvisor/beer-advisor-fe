import React from 'react';
import { InputBase, FormLabel , FormControl } from '@material-ui/core';

const SearchField = (props: any) => {
    const { label, placeholder } = props;

    return (
        <FormControl> 
        {label && (<FormLabel  htmlFor="search-bar">
          {label}
        </FormLabel >)}
        <InputBase
            id="search-bar"
            placeholder={placeholder}
        />
        </FormControl>
    );
};

export default SearchField;
