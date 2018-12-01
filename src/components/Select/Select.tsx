import React, { useState, ChangeEvent } from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Select from '@material-ui/core/Select';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    selectEmpty: {
        marginTop: 5 * 2,
    },
    formControl: {
        minWidth: 120,
        maxWidth: 300,
    },
});

interface SelectBoxProps {
    label?: string;
    items: JSX.Element[];
}

const SelectBox = ({ label, items }: SelectBoxProps) => {
    const [selectedValue, setSelectedValue] = useState('0');
    const { selectEmpty, root, formControl } = useStyles();

    const handleValueChange = ({
        target: { value },
    }: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(value);
    };

    return (
        <div className={root}>
            <FormControl variant="standard" className={formControl}>
                {label && (
                    <InputLabel htmlFor="filled-age-native-simple">
                        {label}
                    </InputLabel>
                )}
                <Select
                    className={selectEmpty}
                    value={selectedValue}
                    onChange={handleValueChange}
                    input={<Input id="filled-age-native-simple" />}
                >
                {items}
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectBox;
