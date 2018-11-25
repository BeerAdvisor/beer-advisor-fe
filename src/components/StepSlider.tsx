import React, { useState, ChangeEvent } from 'react';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';
import Slider from '@material-ui/lab/Slider';
import { Typography } from '@material-ui/core';
import { ThemeStyle } from '@material-ui/core/styles/createTypography';

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: '0.5%',
  },
  slider: {
    padding: '22px 0px',
  },
  labels: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export interface MaterialSliderProps {
  min?: number;
  max?: number;
  step?: number;
  labelElement?: ThemeStyle;
}

const StepSlider = (props: MaterialSliderProps) => {
  const classes = useStyles();
  const [sliderValue, setSliderValue] = useState(0);
  const { min = 0, max = 100, step = 10, labelElement = 'h6'} = props;

  const handleChange = (e: ChangeEvent<{}>, value: number) => {
    setSliderValue(value);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={sliderValue}
        classes={{ container: classes.slider }}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
      />
      <div className={classes.labels}>
      <Typography variant={labelElement}>{min}</Typography>
      <Typography variant={labelElement}>{sliderValue}</Typography>
      </div>
    </div>
  );
};

export default StepSlider;
