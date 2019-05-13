import React, { useState, ChangeEvent, useCallback } from 'react';
import { FormControl, FormLabel, Input, Select } from '@material-ui/core';

export interface SelectBoxProps {
    label?: string;
    items: JSX.Element[];
    name: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>, value?: string) => void;
    value: string;
}

const SelectBox: React.SFC<SelectBoxProps> = ({
    label,
    items,
    name,
    onChange,
    value: defaultValue,
    children,
    ...other
}) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const handleValueChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e);
        }

        setSelectedValue(() => e.target.value);
    }, [onChange]);

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
                        inputProps={other}
                    />
                }
            >
                {items}
            </Select>
        </FormControl>
    );
};

export default SelectBox;
