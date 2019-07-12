import { ApolloQueryResult } from 'apollo-boost';
import { QueryControls } from 'react-apollo';

export interface BarFormValues {
    maxBeerPrice: number[];
    openHours: number[];
    filter?: string;
    barName?: string;
}

export interface BarFormData extends QueryControls {
    barForm: BarFormValues;
}

export type BarForm = ApolloQueryResult<BarFormData>;
