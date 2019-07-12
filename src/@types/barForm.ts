import { ApolloQueryResult } from 'apollo-boost';
import { QueryControls } from 'react-apollo';

export interface BarFormValues {
    maxBeerPrice: number[];
    openHours: number[];
    filter?: string;
    barName?: string;
}

interface FormData extends QueryControls {
    barForm: BarFormValues;
}

export type BarForm = ApolloQueryResult<FormData>;
