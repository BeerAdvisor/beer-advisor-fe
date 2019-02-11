import React from 'react';
import { InputBase, FormLabel , FormControl } from '@material-ui/core';

const SearchField = (props: any) => {
    const { label, placeholder, input: { name, onChange, value,  ...otherInput }, ...other} = props;

    return (
        <FormControl> 
        {label && (<FormLabel>
          {label}
        </FormLabel >)}
        <InputBase
            {...other}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            inputProps={otherInput}
        />
        </FormControl>
    );
};

export default SearchField;
