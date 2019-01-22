import React from 'react';
import { Form, Field, FormRenderProps } from 'react-final-form';
import { Select, Slider, TextField, Button, ToogleButtons } from '../../components';
import { BeerTypeSelect } from '../../containers';
import { MainFormContainer, ElementsWrapper, SliderContaier, FormElementContainer, ButtonWrapper } from './style';

interface MainFormProps {
    searchFieldPlaceholder: string;
    searchFieldLabel: string;
    selectLabel: string;
    sliderMaxValue: number;
    sliderMinValue: number;
    sliderStep: number;
}

const onSubmit = (values: object) => {
    window.alert(JSON.stringify(values));
  };

const MainForm = ({
    searchFieldLabel,
    searchFieldPlaceholder,
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
        label: 'Filter by',
    };

    const generateForm = ({ handleSubmit, submitting, }: FormRenderProps) => (
        <form onSubmit={handleSubmit}>
            <MainFormContainer>
                <FormElementContainer>
                    <ElementsWrapper>
                        <Field name="beerName" component={TextField} type="text" {...searchFieldProps} />
                        {/* 
                        // @ts-ignore  https://github.com/final-form/react-final-form/issues/175 */}
                        <BeerTypeSelect {...selectProps} />
                        <SliderContaier>
                            {/* 
                            // @ts-ignore  https://github.com/final-form/react-final-form/issues/175 */}
                            <Field name="priceRange" component={Slider} {...sliderProps} label="Price" />
                            {/* 
                             // @ts-ignore  https://github.com/final-form/react-final-form/issues/175 */}
                            <Field name="strongRange" component={Slider} {...sliderProps} label="Strong" />
                        </SliderContaier>    
                    </ElementsWrapper>
                    {/* 
                             // @ts-ignore  https://github.com/final-form/react-final-form/issues/175 */}
                    <Field name="filter" component={ToogleButtons} {...toogleButtonsProps} />
                    <ButtonWrapper>
                        <Button type="submit" disabled={submitting} fullWidth={true} variant="contained" color="primary">Search</Button>
                    </ButtonWrapper>
                </FormElementContainer>
            </MainFormContainer>
        </form>
    );

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{ priceRange: [0, 100], strongRange: [0, 100], filter: 'Distance' }}
            render={generateForm}
            />
    );
};

export default MainForm;
