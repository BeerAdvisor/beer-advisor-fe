import React, { useState, ChangeEvent } from 'react';
import { FormControl, FormLabel, Input, Select } from '@material-ui/core';

interface SelectBoxProps {
    label?: string;
    items: JSX.Element[];
}

const SelectBox = ({ label, items }: SelectBoxProps) => {
    const [selectedValue, setSelectedValue] = useState('0');

    const handleValueChange = ({
        target: { value },
    }: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(value);
    };

    return (
        <FormControl variant="standard">
            {label && (
                <FormLabel htmlFor="filled-age-native-simple">
                    {label}
                </FormLabel>
            )}
            <Select
                value={selectedValue}
                onChange={handleValueChange}
                input={<Input id="filled-age-native-simple" />}
            >
            {items}
            </Select>
        </FormControl>
    );
};

export default SelectBox;
