import React, { ChangeEvent, useState } from 'react';
import { ToggleButtonGroup } from '@material-ui/lab';
import ToggleButton from './ToogleButton';
import { Theme } from '@material-ui/core';
import { RadioButton, ToogleButtonContainer } from './style';
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
}

const ToggleButtons = ({ defaultValue }: ToggleButtonProps) => {
  const { root } = useStyles();
  const [value, setValue ] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<{}>, radioValue: string) => setValue(radioValue);

    return (
          <ToogleButtonContainer>
            <ToggleButtonGroup classes={{ root }} value={value} exclusive={true} onChange={handleChange}>
              <ToggleButton value="left">
                 Shit
              </ToggleButton>
              <ToggleButton value="center">
                 Shit
              </ToggleButton>
              <ToggleButton value="right">
                 Shit
              </ToggleButton>
            </ToggleButtonGroup>
          </ToogleButtonContainer>
    );
};

export default ToggleButtons;
