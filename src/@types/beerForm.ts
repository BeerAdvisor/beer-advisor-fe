import { DataProps } from 'react-apollo';

export interface BeerFormValues {
    priceRange: number[];
    strongRange: number[];
    filter?: string;
    beerName?: string;
    beerType?: string;
}

export interface FormData {
    beerForm: BeerFormValues;
}

export type BeerForm = DataProps<FormData>;
