import React, { ChangeEvent, useState } from 'react';
import { ToggleButtonGroup as MaterialToggleButtonGroup } from '@material-ui/lab';
import { map } from 'ramda';
import { FormLabel } from '@material-ui/core';
import { FieldRenderProps } from 'react-final-form';
import { ToggleButtonGroupProps } from '@material-ui/lab/ToggleButtonGroup';

import styled from '../../../styled-components';
import { Field } from '../../../containers';

import ToggleButton from './ToogleButton';
import { ToogleButtonContainer, ElementsContainer } from './style';

const ToggleButtonGroupStyled = styled((props: ToggleButtonGroupProps) => (
    <MaterialToggleButtonGroup {...props}/>
))`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: stretch;
    background: ${props => props.theme.palette.light};
    border-radius: 25px;
    box-shadow: none;
    overflow: unset;
    margin: 0 -10px;

    & .selected {
        border-color: ${props => props.theme.palette.primary.main};
        color:  ${props => props.theme.palette.primary.main};
        border: 2px solid;
        background-color: transparent;
    }
`;

export interface ToggleButtonProps {
    values: string[];
    label?: string;
}

const ToogleButtonGroup = ({
    values,
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
                    {mapButtonValues(values)}
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

export default Field(ToogleButtonGroup);
