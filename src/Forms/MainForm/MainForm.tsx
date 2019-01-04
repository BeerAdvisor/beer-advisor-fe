import React from 'react';
import { Select, Slider, TextField } from '../../components';
import Button from '@material-ui/core/Button';
import { MainFormContainer, ElementsWrapper, ButtonContainer } from './style';

interface MainFormProps {
    searchFieldPlaceholder: string;
    selectLabel: string;
    selectMenuItems: JSX.Element[];
    sliderMaxValue: number;
    sliderMinValue: number;
    sliderStep: number;
}

const MainForm = ({
    searchFieldPlaceholder,
    selectMenuItems,
    sliderMaxValue,
    sliderMinValue,
    sliderStep,
    selectLabel,
}: MainFormProps) => {
    const searchFieldProps = {
        placeholder: searchFieldPlaceholder,
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
