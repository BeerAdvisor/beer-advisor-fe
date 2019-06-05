import React, { useCallback } from 'react';
import { ApolloClient } from 'apollo-boost';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Field, FormikProps } from 'formik';
import { memoizeWith, identity } from 'ramda';

import {
    SliderField,
    SelectField,
    SmallButton,
    ToogleButtonGroupField,
} from '../../components/ui';
import { TypeSelect } from '../../components';
import { beerTypes, BeerForm, BeerFormValues } from '../../@types';
import { FormixInputField } from '../../components/formix';
import { toggleBeerFormStatus } from '../../containers/ToggleFormMobileButton/ToggleFormMobileButton';

import {
    MainFormContainer,
    ElementsWrapper,
    SliderContaier,
    ButtonWrapper,
    MainFormToogleButtonGroupFieldWrapper,
    MainFormContainerProps,
} from './style';

export interface MainFormProps
    extends RouteComponentProps,
        MainFormContainerProps,
        BeerForm {
    searchFieldPlaceholder: string;
    searchFieldLabel: string;
    selectLabel: string;
    sliderMaxValue: number;
    sliderMinValue: number;
    sliderStep: number;
    client: ApolloClient<any>;
    beerTypesData: beerTypes;
}

const onSubmit = memoizeWith(
    identity,
    (history: RouteComponentProps['history'], client: ApolloClient<any>) => ({
        beerName = '',
        beerType,
        filter,
        priceRange,
        strongRange,
    }: BeerFormValues) => {

        client.writeData({
            data: {
                beerForm: {
                    __typename: 'beerForm',
                    beerName,
                    beerType,
                    filter,
                    priceRange,
                    strongRange,
                },
            },
        });

        // TODO: How about use apollo consumer on the to level
        // pass it down to react context and create inside of context
        // all store dependant functions? Because this toggler is just fucking ugly
        // || named mutations and graphql hoc?
        toggleBeerFormStatus(client, false)();

        history.push('/form/beers');
    }
);

const MainForm = ({
    searchFieldLabel,
    searchFieldPlaceholder,
    sliderMaxValue,
    sliderMinValue,
    sliderStep,
    selectLabel,
    history,
    variant,
    data,
    client,
    beerTypesData,
}: MainFormProps) => {
    const searchFieldProps = {
        placeholder: searchFieldPlaceholder,
        label: searchFieldLabel,
    };

    const selectProps = {
        label: selectLabel,
        types: beerTypesData.beerTypes || [],
    };

    const sliderProps = {
        max: sliderMaxValue,
        min: sliderMinValue,
        step: sliderStep,
    };

    const filterProps = {
        values: ['Price', 'Distance', 'Rating'],
        label: 'Filter by',
    };

    const searchButtonProps = {
        type: 'submit',
        fullWidth: true,
        variant: 'contained',
        color: 'secondary',
    };

    const generateForm = useCallback(
        ({ handleSubmit }: FormikProps<BeerFormValues>) => (
            <form onSubmit={handleSubmit}>
                <MainFormContainer variant={variant}>
                    <ElementsWrapper>
                        <Field
                            name="beerName"
                            type="text"
                            {...searchFieldProps}
                            component={FormixInputField}
                        />
                        <TypeSelect
                            name="beerType"
                            {...selectProps}
                        />
                        <SliderContaier>
                            <Field
                                component={SliderField}
                                name="priceRange"
                                label="Price"
                                {...sliderProps}
                            />
                            <Field
                                component={SliderField}
                                name="strongRange"
                                {...sliderProps}
                                label="Strong"
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
            searchFieldProps,
            filterProps,
            searchButtonProps,
            selectProps,
            sliderProps,
        ]
    );

    return (
        data.beerForm ? (
            <Formik
                onSubmit={onSubmit(history, client)}
                initialValues={data.beerForm}
                render={generateForm}
            />
        )
        : null
    );
};

export default MainForm;
