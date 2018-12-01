import React from 'react';
import SearchField from './TextFields/SearchField';
import Select from './Select';
import StepSlider from './StepSlider';
import styled from 'styled-components';

const SearchLayoutConatiner = styled.div`
    display: flex;
`;

interface SearchLayoutProps {
    searchFieldPlaceholder: string;
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
}: SearchLayoutProps) => {
    const searchFieldProps = {
        placeholder: searchFieldPlaceholder,
    };

    const selectProps = {
        items: selectMenuItems,
    };

    const sliderProps = {
        max: sliderMaxValue,
        min: sliderMinValue,
        step: sliderStep,
    };

    return (
        <SearchLayoutConatiner>
            <SearchField {...searchFieldProps} />
            <Select {...selectProps}/>
            <StepSlider {...sliderProps} />
        </SearchLayoutConatiner>
    );
};

export default SearchLayout;
