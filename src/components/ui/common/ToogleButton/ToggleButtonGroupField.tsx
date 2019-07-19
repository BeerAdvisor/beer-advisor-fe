import React from 'react';
import { FieldProps } from 'formik';

import { Field } from '../../../CustomField';

import ToogleButtonGroup from './ToogleButtonGroup';

export interface ToggleButtonProps extends FieldProps {
    onChange?: (e: any, value: string) => void;
    value: string;
    name: string;
    values: string[];
}

const ToogleButtonGroupField = ({
    onChange, 
    value: defaultValue,
    name,
    ...other
}: ToggleButtonProps) => {
    const handleChange = (radioValue: string) => {
        if (onChange) {
            onChange(undefined, radioValue);
        }

    };

    return (
        <ToogleButtonGroup 
            {...other}
            name={name}
            onChange={handleChange}
            defaultValue={defaultValue}
        />
    );
};

export default Field(ToogleButtonGroupField);
