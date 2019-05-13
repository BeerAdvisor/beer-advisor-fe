import React from 'react';
import { InputBase, FormLabel , FormControl } from '@material-ui/core';
import { InputBaseProps } from '@material-ui/core/InputBase';

export interface InputProps extends InputBaseProps {
    label?: string;
}

const Input = (props: InputProps) => {
    const { label, placeholder, name, onChange, value, defaultValue, ...other } = props;
    console.log(value);
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
            inputProps={other as any}
            {...other}
        />
        </FormControl>
    );
};

export default Input;
