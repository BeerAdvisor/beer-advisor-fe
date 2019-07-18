import React, { useCallback } from 'react';
import { Formik, FormikProps, Field } from 'formik';
import { MutationFn } from 'react-apollo';
import { RouteComponentProps } from 'react-router';

import {
    SliderField,
    SelectField,
    SmallButton,
    ToogleButtonGroupField,
} from '../../components';
import { FormixInputField } from '../../components/formix';
import { BarFormValues } from '../../@types/barForm';
import {
    Query,
    GET_BAR_FORM_DATA,
    SEARCH_BAR_MUTATION,
    Mutation,
} from '../../graphql';

import {
    MainFormContainer,
    ElementsWrapper,
    SliderContaier,
    MainFormToogleButtonGroupFieldWrapper,
    ButtonWrapper,
} from './style';

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

export interface BarForm {
    barForm: BarFormValues;
}

export interface BarSearchFormProps extends RouteComponentProps {
    variant?: 'small';
    searchBar: MutationFn<any, BarForm>;
}

const BarSearchForm = ({ variant, searchBar, history }: BarSearchFormProps) => {
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
                        <SelectField name="filter" {...filterProps} />
                    )}
                    <ButtonWrapper>
                        <SmallButton {...searchButtonProps}>Find bar</SmallButton>
                    </ButtonWrapper>
                </MainFormContainer>
            </form>
        ),
        [variant, barFieldProps, filterProps, searchButtonProps, sliderProps]
    );

    const onSubmit = (values: BarFormValues) => {
        searchBar({ variables: { barForm: values } }).then(() => history.push('/form/bars'));
    };

    return (
        <Query query={GET_BAR_FORM_DATA}>
            {({ data }) => (
                <Formik
                    onSubmit={onSubmit}
                    initialValues={data.barForm}
                    render={generateForm}
                />
            )}
        </Query>
    );
};

export default BarSearchForm;
