import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { RouteComponentProps } from 'react-router-dom';
import { Form, Field, FormRenderProps } from 'react-final-form';
import { Slider, TextField, Button, ToogleButtons } from '../../components/ui';
import { BeerTypeSelect } from '../../containers';
import { MainFormContainer, ElementsWrapper, SliderContaier, FormElementContainer, ButtonWrapper } from './style';

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

export interface MainFormProps extends RouteComponentProps {
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
    window.alert(JSON.stringify(values));
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
                        <Button type="submit" disabled={submitting} fullWidth={true} variant="contained" color="primary">
                            Search
                        </Button>
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
