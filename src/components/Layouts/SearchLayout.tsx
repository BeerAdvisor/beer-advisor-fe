import React from 'react';
import SearchField from '../TextFields/SearchField';
import Select from '../Select/Select';
import StepSlider from '../Sliders/StepSlider';
import { SearchLayoutWrapper, ElementsWrapper } from './style';

interface SearchLayoutProps {
    searchFieldPlaceholder: string;
    selectLabel: string;
    selectMenuItems: JSX.Element[];
    sliderMaxValue: number;
    sliderMinValue: number;
    sliderStep: number;
}

const SearchLayout = ({
    searchFieldPlaceholder,
    selectMenuItems,
    sliderMaxValue,
    sliderMinValue,
    sliderStep,
    selectLabel,
}: SearchLayoutProps) => {
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
        <SearchLayoutWrapper>
            <SearchField {...searchFieldProps} />
            <ElementsWrapper>
                <Select {...selectProps}/>
                <StepSlider {...sliderProps} />
            </ElementsWrapper>
        </SearchLayoutWrapper>
    );
};

export default SearchLayout;
