import React, { useCallback } from 'react';
import { Formik, FormikProps, Field } from 'formik';

import { SliderField, SelectField, SmallButton, ToogleButtonGroupField } from '../../components';
import { FormixInputField } from '../../components/formix';
import { BarFormValues } from '../../@types/barForm';
import { Query, GET_BAR_FORM_DATA } from '../../graphql';

import { MainFormContainer, ElementsWrapper, SliderContaier, MainFormToogleButtonGroupFieldWrapper, ButtonWrapper } from './style';

const barFieldProps = {
    placeholder: 'e.g. Kozlovna',
    label: 'Name',
};

const sliderProps = {
    sliderMaxValue: 100,
    sliderMinValue: 0,
    sliderStep: 1,
};

const searchButtonProps = {
    type: 'submit',
    fullWidth: true,
    variant: 'contained',
    color: 'primary',
};

const filterProps = {
    values: ['Distance', 'Rating'],
    label: 'Filter by',
};

export interface BarSearchFormProps {
    variant?: 'small';
}

const BarSearchForm = ({ variant }: BarSearchFormProps) => {

    const generateForm = useCallback(
        ({ handleSubmit }: FormikProps<BarFormValues>) => (
            <form onSubmit={handleSubmit}>
                <MainFormContainer variant={variant}>
                    <ElementsWrapper>
                        <Field
                            name="barName"
                            type="text"
                            {...barFieldProps}
                            component={FormixInputField}
                        />
                        <SliderContaier>
                            <Field
                                component={SliderField}
                                name="maxBeerPrice"
                                label="Max beer price"
                                {...sliderProps}
                            />
                            <Field
                                component={SliderField}
                                name="openHours"
                                {...sliderProps}
                                label="Open hours"
                            />
                        </SliderContaier>
                    </ElementsWrapper>
                    {variant !== 'small' ? (
                        <MainFormToogleButtonGroupFieldWrapper>
                            <Field
                                component={ToogleButtonGroupField}
                                name="filter"
                                {...filterProps}
                            />
                        </MainFormToogleButtonGroupFieldWrapper>
                    ) : (
                        <SelectField
                            name="filter"
                            {...filterProps}
                        />
                    )}
                    <ButtonWrapper>
                        <SmallButton {...searchButtonProps}>Search</SmallButton>
                    </ButtonWrapper>
                </MainFormContainer>
            </form>
        ),
        [
            variant,
            barFieldProps,
            filterProps,
            searchButtonProps,
            sliderProps,
        ]
    );

    return (
        <Query query={GET_BAR_FORM_DATA}>
        {({ data }) => (
                    <Formik
                    onSubmit={() => null}
                    initialValues={data.barForm}
                    render={generateForm}
                />
        )}
        </Query>
    );
};

export default BarSearchForm;
