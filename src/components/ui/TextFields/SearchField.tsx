import React from 'react';
import { InputBase, FormLabel , FormControl } from '@material-ui/core';

const SearchField = (props: any) => {
    // TODO: transfer input to field component
    const { label, placeholder, name, ...other} = props;

    return (
        <FormControl> 
        {label && (<FormLabel>
          {label}
        </FormLabel >)}
        <InputBase
            name={name}
            id={name}
            placeholder={placeholder}
            // onChange={onChange}
            // value={value}
            // inputProps={otherInput}
            {...other}
        />
        </FormControl>
    );
};

export default SearchField;
