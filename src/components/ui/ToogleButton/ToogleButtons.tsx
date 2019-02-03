import React, { ChangeEvent, useState } from 'react';
import { ToggleButtonGroup } from '@material-ui/lab';
import { map } from 'rambda';
import ToggleButton from './ToogleButton';
import { Theme, FormLabel } from '@material-ui/core';
import { ToogleButtonContainer, ElementsContainer } from './style';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';
import { FieldRenderProps } from 'react-final-form';

const useStyles = makeStyles((theme: Theme) => ({
    selected: {
        borderColor: theme.palette.secondary.main,
    },
    root: {
        display: 'flex',
        width: '100%',
        justifyContent: 'stretch',
        background: theme.palette.secondary.main,
        borderRadius: '25px',
        boxShadow: 'none',
        overflow: 'unset', // shadows
    },
}));

export interface ToggleButtonProps {
    buttonValues: string[];
    label?: string;
}

const ToggleButtons = ({
    buttonValues,
    label,
    input: { name, onChange, value: defaultValue },
}: ToggleButtonProps & FieldRenderProps) => {
    const { root } = useStyles();
    const [value, setValue] = useState(defaultValue);

    const handleChange = (event: ChangeEvent<{}>, radioValue: string) => {
        if (onChange) {
            onChange(radioValue);
        }

        setValue(radioValue);
    };

    return (
        <ElementsContainer>
            {label && (
                <FormLabel htmlFor={name}>
                    {label}
                </FormLabel>
            )}
            <ToogleButtonContainer>
                <ToggleButtonGroup
                    id={name}
                    classes={{ root }}
                    value={value}
                    exclusive={true}
                    onChange={handleChange}
                >
                    {mapButtonValues(buttonValues)}
                </ToggleButtonGroup>
            </ToogleButtonContainer>
        </ElementsContainer>
    );
};

const mapButtonValues = (buttonValues: string[]) =>
    map(
        buttonValue => (
            <ToggleButton key={buttonValue} value={buttonValue}>
                {buttonValue}
            </ToggleButton>
        ),
        buttonValues
    );

export default ToggleButtons;
