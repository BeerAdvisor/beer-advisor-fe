import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { RouteComponentProps } from 'react-router-dom';
import { Form, Field, FormRenderProps } from 'react-final-form';

import { SliderField, InputField, SelectField, Button, ToogleButtonGroupField, SmallButton } from '../../components/ui';
import { BeerTypeSelect } from '../../containers';

import { MainFormContainer, ElementsWrapper, SliderContaier, FormElementContainer, ButtonWrapper, MainFormContainerProps } from './style';

const GET_BEER_FORM_DATA = gql`
  {
    beerForm @client {
        priceRange
        strongRange
        filter
        beerName
        beerType
      }
  }
`;

export interface MainFormProps extends RouteComponentProps, MainFormContainerProps {
    searchFieldPlaceholder: string;
    searchFieldLabel: string;
    selectLabel: string;
    sliderMaxValue: number;
    sliderMinValue: number;
    sliderStep: number;
}

export interface BeerFormValues {
    priceRange: number[];
    strongRange: number[];
    filter?: string;
    beerName?: string;
    beerType?: string;
}

const onSubmit = (history: RouteComponentProps['history'], client: ApolloClient<any>) => (values: BeerFormValues) => {
    // window.alert(JSON.stringify(values));
    client.writeData({
        data: {
            beerForm: {
                __typename: 'beerForm',
                beerName: values.beerName,
                beerType: values.beerType,
                filter: values.filter,
                priceRange: values.priceRange,
                strongRange: values.strongRange,
            },
        },
    });
    history.push('/beers');
  };

const MainForm = ({
    searchFieldLabel,
    searchFieldPlaceholder,
    sliderMaxValue,
    sliderMinValue,
    sliderStep,
    selectLabel,
    history,
    variant,
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

    const generateForm = ({ handleSubmit, submitting }: FormRenderProps) => (
        <form onSubmit={handleSubmit}>
            <MainFormContainer variant={variant}>
                <FormElementContainer>
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
                        <SelectField name="filter" {...filterProps}/>
                    )}
                    <ButtonWrapper>
                        {variant !== 'small' ? (
                            <Button {...searchButtonProps} disabled={submitting}>Search</Button>
                            ) : (
                            <SmallButton {...searchButtonProps} disabled={submitting}>Search</SmallButton>
                        )}
                    </ButtonWrapper>
                </FormElementContainer>
            </MainFormContainer>
        </form>
    );

    const initialValues: BeerFormValues = { beerName: '', beerType:'', priceRange: [0, 100], strongRange: [0, 100], filter: 'Distance' };

    return (
        <Query query={GET_BEER_FORM_DATA}>
            {({ data, client }) => (
            <Form
                    // @ts-ignore
                    onSubmit={onSubmit(history, client)}
                    initialValues={data && data.beerForm ? data.beerForm : initialValues}
                    render={generateForm}
                    />
        )}
        </Query>
    );
};

export default MainForm;
