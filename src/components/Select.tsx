import React, { useState, ChangeEvent } from 'react';
import { FormControl, InputLabel, MenuItem, Input } from '@material-ui/core';
import Select from '@material-ui/core/Select';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';
import { MenuItemProps } from '@material-ui/core/MenuItem';

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
    items?: Array<React.ComponentType<MenuItemProps>>;
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
                // TODO: export this
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectBox;
