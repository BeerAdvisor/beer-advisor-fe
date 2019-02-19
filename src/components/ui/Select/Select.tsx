import React, { useState, ChangeEvent } from 'react';
import { FormControl, FormLabel, Input, Select } from '@material-ui/core';
import { FieldRenderProps } from 'react-final-form';

interface SelectBoxProps {
    label?: string;
    items: JSX.Element[];
}

const SelectBox: React.SFC<SelectBoxProps & FieldRenderProps> = ({
    label,
    items,
    input: { name, onChange, value: defaultValue, ...otherInput },
    ...other
}) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleValueChange = ({
        target: { value: changedValue },
    }: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(changedValue);
        }

        setSelectedValue(changedValue);
    };

    return (
        <FormControl>
            {label && <FormLabel>{label}</FormLabel>}
            <Select
                value={selectedValue}
                onChange={handleValueChange}
                input={
                    <Input
                        {...other}
                        name={name}
                        id={name}
                        disableUnderline={true}
                        inputProps={otherInput}
                    />
                }
            >
                {items}
            </Select>
        </FormControl>
    );
};

export default SelectBox;
