import React from 'react';
import { FieldProps } from 'react-final-form';
import { InputBase, FormLabel , FormControl } from '@material-ui/core';
import { InputBaseProps } from '@material-ui/core/InputBase';

import { Field } from '../../../containers';

const Input = (props: InputBaseProps & FieldProps) => {
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
