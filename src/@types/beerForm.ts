import { DataProps } from 'react-apollo';

export interface FormData {
    beerForm: BeerFormValues;
}

export interface BeerFormValues {
    priceRange: number[];
    strongRange: number[];
    filter?: string;
    beerName?: string;
    beerType?: string;
}

export type BeerForm = DataProps<FormData>;
