import React, { ChangeEvent, useState } from 'react';
import { ToggleButtonGroup } from '@material-ui/lab';
import { map } from 'rambda';
import ToggleButton from './ToogleButton';
import { Theme } from '@material-ui/core';
import { ToogleButtonContainer } from './style';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
    selected: {
        borderColor: theme.palette.secondary.main,
    },
    root: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        background: theme.palette.secondary.main,
        borderRadius: '25px',
        boxShadow: 'none',
    },
}));

export interface ToggleButtonProps {
    defaultValue: string;
    buttonValues: string[];
}

const ToggleButtons = ({ defaultValue, buttonValues }: ToggleButtonProps) => {
  const { root } = useStyles();
  const [value, setValue ] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<{}>, radioValue: string) => setValue(radioValue);

    return (
          <ToogleButtonContainer>
            <ToggleButtonGroup classes={{ root }} value={value} exclusive={true} onChange={handleChange}>
                {mapButtonValues(buttonValues)}
            </ToggleButtonGroup>
          </ToogleButtonContainer>
    );
};

const mapButtonValues = (buttonValues: string[]) => map(buttonValue => (
    <ToggleButton key={buttonValue} value={buttonValue}>
        {buttonValue}
    </ToggleButton>
  ), buttonValues);

export default ToggleButtons;
