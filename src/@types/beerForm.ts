import { ApolloQueryResult } from 'apollo-boost';
import { QueryControls } from 'react-apollo';

export interface BeerFormValues {
    priceRange: number[];
    strongRange: number[];
    filter?: string;
    beerName?: string;
    beerType?: string;
}

interface FormData extends QueryControls {
    beerForm: BeerFormValues;
}

export type BeerForm = ApolloQueryResult<FormData>;
