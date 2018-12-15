/* tslint:disable */
import "rc-slider/assets/index.css";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Range } from "rc-slider";
import { Labels, SliderContainer, trackStyle, handlerStyle, railStyle } from "./style";

export interface ReactSliderProps {
  min: number;
  max: number;
  step: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomizedRange = ({ min, max, step, onChange }: ReactSliderProps) => {
  const [sliderValue, setSliderValue] = useState([min, max]);

  const onSliderChange = (value: number[]) => {
    setSliderValue(value);
  };

  return (
    <SliderContainer>
      <Range
        allowCross={false}
        trackStyle={[{ ...trackStyle }]}
        handleStyle={[{ ...handlerStyle }, { ...handlerStyle}]}
        railStyle={{ ...railStyle }}
        step={step}
        value={sliderValue}
        onChange={onSliderChange}
      />
      <Labels>
        <Typography variant={`h6`}>{sliderValue[0]}</Typography>
        <Typography variant={`h6`}>{sliderValue[1]}</Typography>
      </Labels>
    </SliderContainer>
  );
};

export default CustomizedRange;
