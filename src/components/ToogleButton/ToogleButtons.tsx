import React, { ChangeEvent, useState } from 'react';
import { ToggleButtonGroup } from '@material-ui/lab';
import { map } from 'rambda';
import ToggleButton from './ToogleButton';
import { Theme, FormLabel } from '@material-ui/core';
import { ToogleButtonContainer, ElementsContainer } from './style';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';

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
    defaultValue: string;
    buttonValues: string[];
    label?: string;
}

const ToggleButtons = ({ defaultValue, buttonValues, label }: ToggleButtonProps) => {
  const { root } = useStyles();
  const [value, setValue ] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<{}>, radioValue: string) => setValue(radioValue);

    return (
          <ElementsContainer>
              {label && (
                <FormLabel htmlFor="filled-age-native-simple">
                    {label}
                </FormLabel>
            )}
            <ToogleButtonContainer>
              <ToggleButtonGroup classes={{ root }} value={value} exclusive={true} onChange={handleChange}>
                  {mapButtonValues(buttonValues)}
              </ToggleButtonGroup>
            </ToogleButtonContainer>
          </ElementsContainer>
    );
};

const mapButtonValues = (buttonValues: string[]) => map(buttonValue => (
    <ToggleButton key={buttonValue} value={buttonValue}>
        {buttonValue}
    </ToggleButton>
  ), buttonValues);

export default ToggleButtons;
