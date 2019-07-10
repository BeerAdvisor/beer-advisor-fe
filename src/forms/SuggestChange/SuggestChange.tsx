import React from 'react';
import { Formik, Field, FormikProps, FormikActions } from 'formik';

import { SmallButton, TypeSelect } from '../../components';
import { Clear } from '../../components/Icons';
import { FormixInputField } from '../../components/formix';
import {
    beerTypes_beerTypes as BeerTypes,
    suggestChange_breweries as Breweries,
    beer_beer as Beer,
} from '../../@types';

import { StyledSuggestChange, ButtonWrapper, SuggestChangeFloatingButton } from './style';

export interface BeerSuggestChangeValues {
    name: string;
    brewery: string;
    beerType: string;
    abv: string;
}

const renderSuggestChange = (
    beerTypes?: BeerTypes[] | null,
    breweries?: Breweries[] | null,
    onClear?: () => void
) => ({ handleSubmit }: FormikProps<BeerSuggestChangeValues>) => (
    <StyledSuggestChange onSubmit={handleSubmit}>
        {onClear && <SuggestChangeFloatingButton onClick={onClear} color="primary" size="small">
            <Clear />
        </SuggestChangeFloatingButton>}
        <Field name="name" label="Name" component={FormixInputField} />
        {breweries && <TypeSelect name="brewery" label="Brewery" types={breweries} />}
        {beerTypes && <TypeSelect name="beerType" label="Type" types={beerTypes} />}
        <Field name="abv" label="ABV" component={FormixInputField} />
        <ButtonWrapper>
            <SmallButton color="primary" type="submit">
                Submit
            </SmallButton>
        </ButtonWrapper>
    </StyledSuggestChange>
);

export interface SuggestChangeProps {
    beerTypes: BeerTypes[] | null;
    breweries: Breweries[] | null;
    beer: Beer;
    onClear: () => void;
}
const SuggestChange = ({
    beerTypes,
    breweries,
    beer: { name, brewery, type, strong },
    onClear,
    ...other
}: SuggestChangeProps) => {
    const submitForm = (
        values: BeerSuggestChangeValues,
        actions: FormikActions<BeerSuggestChangeValues>
    ) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 1000);
    };

    return (
        <Formik
            {...other}
            initialValues={{
                name: name || '',
                brewery: (brewery && brewery.name) || '',
                beerType: (type && type.name) || '',
                abv: strong || '',
            }}
            onSubmit={submitForm}
            render={renderSuggestChange(beerTypes, breweries, onClear)}
        />
    );
};

export default SuggestChange;
