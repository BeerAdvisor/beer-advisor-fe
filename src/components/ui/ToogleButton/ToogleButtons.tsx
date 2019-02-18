import React, { ChangeEvent, useState } from 'react';
import { ToggleButtonGroup } from '@material-ui/lab';
import { map } from 'ramda';
import { FormLabel } from '@material-ui/core';
import { FieldRenderProps } from 'react-final-form';
import { ToggleButtonGroupProps } from '@material-ui/lab/ToggleButtonGroup';

import styled from '../../../styled-components';

import ToggleButton from './ToogleButton';
import { ToogleButtonContainer, ElementsContainer } from './style';

const ToggleButtonGroupStyled = styled((props: ToggleButtonGroupProps) => (
    <ToggleButtonGroup {...props}/>
))`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: stretch;
    background: ${props => props.theme.palette.secondary.main};
    border-radius: 25px;
    box-shadow: none;
    overflow: unset;

    & .selected {
        border-color: ${props => props.theme.palette.primary.main};
        color:  ${props => props.theme.palette.primary.main};
        border: 2px solid;
        background-color: transparent;
    }
`;

export interface ToggleButtonProps {
    buttonValues: string[];
    label?: string;
}

const ToggleButtons = ({
    buttonValues,
    label,
    input: { name, onChange, value: defaultValue },
}: ToggleButtonProps & FieldRenderProps) => {
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
                <ToggleButtonGroupStyled
                    id={name}
                    value={value}
                    exclusive={true}
                    onChange={handleChange}
                >
                    {mapButtonValues(buttonValues)}
                </ToggleButtonGroupStyled>
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
