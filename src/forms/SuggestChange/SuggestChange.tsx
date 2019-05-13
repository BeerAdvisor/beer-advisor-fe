import React from 'react';
import { Formik, Field, FormikProps, FormikActions } from 'formik';

import { SmallButton, BeerTypeSelect } from '../../components';
import { FormixInputField, FormixSelectField } from '../../components/formix';
import { beerTypes_beerTypes as BeerTypes } from '../../@types';

import { StyledSuggestChange, ButtonWrapper } from './style';

export interface BeerSuggestChangeValues {
    name: string;
    brewery: string;
    type: string;
    abv: string;
}  

const renderSuggestChange = (beerTypes?: BeerTypes[] | null) => ({ handleSubmit }: FormikProps<BeerSuggestChangeValues>) => (
    <StyledSuggestChange onSubmit={handleSubmit}>
        <Field name="name" component={FormixInputField} />
        <Field name="brewery" component={FormixSelectField} />
        { /* TODO: BeerTypeSelect => TypeSelect, use on brewery */}
        {beerTypes && <BeerTypeSelect isReactFinalForm={false} name="type" beerTypes={beerTypes} />}
        <Field name="abv" component={FormixInputField} />
        <ButtonWrapper>
            <SmallButton color="primary" type="submit">Submit</SmallButton>
        </ButtonWrapper>
    </StyledSuggestChange>
);

export interface SuggestChangeProps {
    beerTypes: BeerTypes[] | null;
}
const SuggestChange = ({ beerTypes, ...other }: SuggestChangeProps) => {
    const submitAnus = (values: BeerSuggestChangeValues, actions: FormikActions<BeerSuggestChangeValues>) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 1000);
    };

    return (
            <Formik 
                {...other}
                initialValues={{ name: '', brewery: 'red', type: '', abv: '' }}
                onSubmit={submitAnus}
                render={renderSuggestChange(beerTypes)}
            />
    );
};

export default SuggestChange;
