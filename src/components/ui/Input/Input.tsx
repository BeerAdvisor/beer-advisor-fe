import React from 'react';
import { InputBase, FormLabel , FormControl } from '@material-ui/core';

import { Field } from '../../../containers';

const Input = (props: any) => {
    const { label, placeholder, name, input: { onChange, value, ...otherInput }, ...other} = props;

    return (
        <FormControl> 
        {label && (<FormLabel>
          {label}
        </FormLabel >)}
        <InputBase
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            inputProps={otherInput}
            {...other}
        />
        </FormControl>
    );
};

export default Field(Input);
