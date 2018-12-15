import React from 'react';
import { Select, Slider, TextField } from '../../components';
import Button from '@material-ui/core/Button';
import { MainLayoutContainer, ElementsWrapper, ButtonContainer } from './style';

interface MainLayoutProps {
    searchFieldPlaceholder: string;
    selectLabel: string;
    selectMenuItems: JSX.Element[];
    sliderMaxValue: number;
    sliderMinValue: number;
    sliderStep: number;
}

const MainLayout = ({
    searchFieldPlaceholder,
    selectMenuItems,
    sliderMaxValue,
    sliderMinValue,
    sliderStep,
    selectLabel,
}: MainLayoutProps) => {
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
        <MainLayoutContainer>
            <TextField {...searchFieldProps} />
            <ElementsWrapper>
                <Select {...selectProps}/>
                <Slider {...sliderProps} />
            </ElementsWrapper>
            <ButtonContainer>
                <Button fullWidth={true} variant="contained" color="primary">Search</Button>
            </ButtonContainer>
        </MainLayoutContainer>
    );
};

export default MainLayout;
