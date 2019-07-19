import React, { useState, ChangeEvent, useCallback } from 'react';
import { FormControl, FormLabel, Input, Select } from '@material-ui/core';

type SelectChangeEvent = React.ChangeEvent<{ name?: string; value: string }>;

export interface SelectBoxProps {
    label?: string;
    items: JSX.Element[];
    name: string;
    onChange: (e: SelectChangeEvent, value?: string) => void;
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
    const handleValueChange = useCallback((e: SelectChangeEvent) => {
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
                onChange={handleValueChange as any}
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
