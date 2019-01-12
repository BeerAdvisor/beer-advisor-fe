import React from 'react';
import { Select, Slider, TextField, Button, ToogleButtons } from '../../components';
import { MainFormContainer, ElementsWrapper, SliderContaier } from './style';

interface MainFormProps {
    searchFieldPlaceholder: string;
    searchFieldLabel: string;
    selectLabel: string;
    selectMenuItems: JSX.Element[];
    sliderMaxValue: number;
    sliderMinValue: number;
    sliderStep: number;
}

const MainForm = ({
    searchFieldLabel,
    searchFieldPlaceholder,
    selectMenuItems,
    sliderMaxValue,
    sliderMinValue,
    sliderStep,
    selectLabel,
}: MainFormProps) => {
    const searchFieldProps = {
        placeholder: searchFieldPlaceholder,
        label: searchFieldLabel,
    };

    const selectProps = {
        items: selectMenuItems,
        label: selectLabel,
    };

    const sliderProps = {
        max: sliderMaxValue,
        min: sliderMinValue,
        step: sliderStep,
    };

    const toogleButtonsProps = {
        defaultValue: 'Distance',
        buttonValues: ['Price', 'Distance', 'Rating'],
    };

    return (
        <MainFormContainer>
            <ElementsWrapper>
                <TextField {...searchFieldProps} />
                <Select {...selectProps}/>
                <SliderContaier>
                    <Slider {...sliderProps} label="Price" />
                    <Slider {...sliderProps} label="Strong" />
                </SliderContaier>    
            </ElementsWrapper>
            <ToogleButtons {...toogleButtonsProps} />
            <Button fullWidth={true} variant="contained" color="primary">Search</Button>
        </MainFormContainer>
    );
};

export default MainForm;
