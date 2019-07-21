import ApolloClient, { Resolvers } from 'apollo-boost';
import gql from 'graphql-tag';

import { BarFormValues } from '../@types';

export const typeDefs = gql`
    input BeerFormInput {
        priceRange: [Int!]
        strongRange: [Int!]
        filter: String
        beerName: String
        beerType: String
    }

    input BarFormInput {
        maxBeerPrice: [Int!]
        openHours: [Int!]
        filter: String
        barName: String
    }

    extend type Query {
        beerForm: BeerFormInput
        barForm: BarFormInput
        isMainFormOpened: Boolean
    }

    extend type Mutation {
        openForm(noArg: Boolean): Boolean
        closeForm(noArg: Boolean): Boolean
        searchBar(barForm: BarFormInput): Boolean
    }
`;

interface BeerForm {
    priceRange: number[];
    strongRange: number[];
    filter?: string;
    beerName?: string;
    beerType?: string;
    __typename: string;
}

interface BarForm extends BarFormValues {
    __typename: string;
}

interface InitialState {
    beerForm: BeerForm;
    barForm: BarForm;
    isMainFormOpened: boolean;
}

export interface Client {
    defaults: InitialState;
    typeDefs: any;
}

const defaults: InitialState = {
    beerForm: {
        beerName: '',
        beerType: '',
        priceRange: [0, 100],
        strongRange: [0, 100],
        filter: 'Distance',
        __typename: 'BeerFormInput',
    },
    barForm: {
        barName: '',
        maxBeerPrice: [0, 100],
        openHours: [0, 100],
        filter: 'Distance',
        __typename: 'BarFormInput',
    },
    isMainFormOpened: true,
};

export const resolvers: Resolvers = {
    Mutation: {
        closeForm: (_, __, { cache }) => {
            cache.writeData({ data: { isMainFormOpened: false } });
            return null;
        },
        openForm: (_, __, { cache }) => {
            cache.writeData({ data: { isMainFormOpened: true } });
            return null;
        },
        searchBar: (_, args, { cache }) => {
            const { barForm } = args;

            cache.writeData({
                data: {
                    barForm: {
                        ...barForm,
                    },
                },
            });
            return null;
        },
    },
};

const client = new ApolloClient({
    uri: 'https://beer-advisor-development.herokuapp.com',
    credentials: 'include',
    clientState: {
        defaults,
        resolvers,
        typeDefs,
    },
    onError: ({ graphQLErrors, networkError }) => {
        // if (graphQLErrors) {
        //   const graphqlError = head(graphQLErrors);
        // }
        // if (networkError) {
        //   throw new ServerError(networkError);
        // }
    },
});

export default client;
