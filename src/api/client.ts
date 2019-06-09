import ApolloClient, { Resolvers } from 'apollo-boost';
import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    beerForm: BeerForm
    isMainFormOpened: Boolean
  }

  extend type BeerForm {
    priceRange: [Int!]
    strongRange: [Int!]
    filter: String
    beerName: String
    beerType: String
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

interface InitialState {
  beerForm: BeerForm;
  isMainFormOpened: boolean;
}

export interface Client {
  defaults: InitialState;
  typeDefs: any;
}

const defaults: InitialState = {
  beerForm: {
    beerName: '', beerType:'', priceRange: [0, 100], strongRange: [0, 100], filter: 'Distance', __typename: 'beerForm',
  },
  isMainFormOpened: false,
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
  onError: (({ graphQLErrors, networkError }) => {
    // if (graphQLErrors) {
    //   const graphqlError = head(graphQLErrors);
    // }
  
    // if (networkError) {
    //   throw new ServerError(networkError);
    // }
  }),
});

export default client;
