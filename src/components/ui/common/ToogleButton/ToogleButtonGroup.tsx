import React, { ChangeEvent, useState } from 'react';
import { ToggleButtonGroup as MaterialToggleButtonGroup } from '@material-ui/lab';
import { map } from 'ramda';
import { FormLabel } from '@material-ui/core';
import { ToggleButtonGroupProps } from '@material-ui/lab/ToggleButtonGroup';

import styled from '../../../../styled-components';

import ToggleButton from './ToogleButton';
import { ToogleButtonContainer, ElementsContainer } from './style';

const ToggleButtonGroupStyled = styled((props: ToggleButtonGroupProps) => (
    <MaterialToggleButtonGroup {...props} />
))`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: stretch;
    background: transparent;
    border-radius: 25px;
    box-shadow: none;
    overflow: unset;
    margin: 0 -10px;

    & .selected {
        border-color: ${props => props.theme.palette.primary.main};
        color: ${props => props.theme.palette.primary.main};
        border: 2px solid;
        background-color: transparent;
    }

    & .label {
        color: ${props => props.theme.palette.dark};
    }
`;

export interface ToggleButtonProps {
    values: string[];
    label?: string;
    isSmall?: boolean;
    defaultValue?: string;
    onChange?: (vale: string) => void;
    name?: string;
}

const ToogleButtonGroup = ({
    values,
    label,
    isSmall,
    onChange,
    defaultValue,
    name,
    ...other
}: ToggleButtonProps) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (event: ChangeEvent<{}>, radioValue: string) => {
        if (onChange) {
            onChange(radioValue);
        }

        setValue(radioValue);
    };

    return (
        <ElementsContainer>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ToogleButtonContainer>
                <ToggleButtonGroupStyled
                    id={name}
                    value={value}
                    exclusive={true}
                    onChange={handleChange}
                    {...other}
                >
                    {mapButtonValues(values, isSmall)}
                </ToggleButtonGroupStyled>
            </ToogleButtonContainer>
        </ElementsContainer>
    );
};

const mapButtonValues = (buttonValues: string[], isSmall: boolean = false) =>
    map(
        buttonValue =>
                (<ToggleButton small={isSmall} key={buttonValue} value={buttonValue}>
                    {buttonValue}
                </ToggleButton>),
        buttonValues
    );

export default ToogleButtonGroup;
