import React, { ChangeEvent } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Field } from '../../../containers';

import ToogleButtonGroup from './ToogleButtonGroup';

export interface ToggleButtonProps {
    onChange?: (vale: string) => void;
    values: string[];
}

const ToogleButtonGroupField = ({
    input: { name, onChange: fieldOnChange, value: defaultValue },
    onChange,
    ...other
}: ToggleButtonProps & FieldRenderProps) => {
    const handleChange = (radioValue: string) => {
        if (onChange) {
            onChange(radioValue);
        }

        if (fieldOnChange) {
            fieldOnChange(radioValue);
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
