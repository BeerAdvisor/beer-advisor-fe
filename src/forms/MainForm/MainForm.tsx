import React, { useCallback } from 'react';
import { ApolloClient } from 'apollo-boost';
import { RouteComponentProps } from 'react-router-dom';
import { Form, FormRenderProps } from 'react-final-form';
import { memoizeWith, identity } from 'ramda';

import { SliderField, InputField, SelectField, Button, ToogleButtonGroupField, SmallButton } from '../../components/ui';
import { BeerTypeSelect } from '../../containers';
import { beerTypes, BeerForm, BeerFormValues } from '../../@types';

import { MainFormContainer, ElementsWrapper, SliderContaier, ButtonWrapper, MainFormContainerProps } from './style';

export interface MainFormProps extends RouteComponentProps, MainFormContainerProps, BeerForm {
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
        beerTypes: beerTypesData.beerTypes || [],
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
        color: 'primary',
    };

    const generateForm = useCallback(
        ({ handleSubmit, submitting }: FormRenderProps) => (
            <form onSubmit={handleSubmit}>
                <MainFormContainer variant={variant}>
                    <ElementsWrapper>
                        <InputField name="beerName" type="text" {...searchFieldProps} />
                        <BeerTypeSelect {...selectProps} />
                        <SliderContaier>
                            <SliderField name="priceRange" {...sliderProps} label="Price" />
                            <SliderField name="strongRange" {...sliderProps} label="Strong" />
                        </SliderContaier>
                    </ElementsWrapper>
                    {variant !== 'small' ? (
                        <ToogleButtonGroupField name="filter" {...filterProps} />
                    ) : (
                        <SelectField name="filter" {...filterProps} />
                    )}
                    <ButtonWrapper>
                        {variant !== 'small' ? (
                            <Button {...searchButtonProps} disabled={submitting}>
                                Search
                            </Button>
                        ) : (
                            <SmallButton {...searchButtonProps} disabled={submitting}>
                                Search
                            </SmallButton>
                        )}
                    </ButtonWrapper>
                </MainFormContainer>
            </form>
        ),
        [variant, searchFieldProps, filterProps, searchButtonProps, selectProps, sliderProps]
    );

    return (
        <Form
            // @ts-ignore
            onSubmit={onSubmit(history, client)}
            initialValues={data.beerForm}
            render={generateForm}
        />
    );
};

export default MainForm;
