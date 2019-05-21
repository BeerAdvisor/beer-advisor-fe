import ApolloClient from 'apollo-boost';
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

const defaults = {
  beerForm: {
    beerName: '', beerType:'', priceRange: [0, 100], strongRange: [0, 100], filter: 'Distance', __typename: 'beerForm',
  },
  isMainFormOpened: false,
};

export const resolvers = {};

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
