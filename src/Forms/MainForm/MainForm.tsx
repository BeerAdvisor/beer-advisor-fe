import React from 'react';
import { Select, Slider, TextField } from '../../components';
import Button from '@material-ui/core/Button';
import { MainFormContainer, ElementsWrapper, ButtonContainer } from './style';

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

    return (
        <MainFormContainer>
            <TextField {...searchFieldProps} />
            <ElementsWrapper>
                <Select {...selectProps}/>
                <Slider {...sliderProps} />
            </ElementsWrapper>
            <ButtonContainer>
                <Button fullWidth={true} variant="contained" color="primary">Search</Button>
            </ButtonContainer>
        </MainFormContainer>
    );
};

export default MainForm;
