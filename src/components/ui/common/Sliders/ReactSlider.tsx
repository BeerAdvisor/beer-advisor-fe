/* tslint:disable */
import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Handle, Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
import { BottleIcon } from '../../../Icons';
import { Field } from '../../../CustomField';

import {
    ValuesContainer,
    SliderContainer,
    trackStyle,
    handlerStyle,
    railStyle,
    SliderWrapper,
    SliderLabel,
} from './style';

const handle = (props: any) => {
    const { dragging, index, ...other } = props;
    return (
        <Handle key={index} {...other}>
            <BottleIcon />
        </Handle>
    );
};

export interface ReactSliderProps {
    step: number;
    label?: string;
    onChange?: (e: any, value: number[]) => void;
    value: number[];
}

const CustomizedRange = ({
    step,
    label,
    onChange,
    value = [0, 0],
    ...other
}: ReactSliderProps) => {
    const [sliderValue, setSliderValue] = useState(value);

    const onSliderChange = (value: number[]) => {
        if (onChange) {
            onChange(undefined, value);
        }
        setSliderValue(value);
    };

    return (
        <SliderContainer>
            {label && <SliderLabel>{label}</SliderLabel>}
            <SliderWrapper>
                <Range
                    allowCross={false}
                    trackStyle={[{ ...trackStyle }]}
                    handleStyle={[{ ...handlerStyle }, { ...handlerStyle }]}
                    railStyle={{ ...railStyle }}
                    step={step}
                    value={sliderValue}
                    onChange={onSliderChange}
                    handle={handle}
                    {...other}
                />
                <ValuesContainer>
                    <Typography variant={`h6`}>{sliderValue[0]}</Typography>
                    <Typography variant={`h6`}>{sliderValue[1]}</Typography>
                </ValuesContainer>
            </SliderWrapper>
        </SliderContainer>
    );
};

export default Field(CustomizedRange);
