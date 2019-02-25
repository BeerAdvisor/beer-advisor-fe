import ApolloClient from 'apollo-boost';

const defaults = {
  beerForm: {
    beerName: '', beerType:'', priceRange: [0, 100], strongRange: [0, 100], filter: 'Distance', __typename: 'beerForm',
  },
};

const resolvers = {};

const client = new ApolloClient({
  uri: 'https://beer-advisor-development.herokuapp.com',
  credentials: 'include',
  clientState: {
    defaults,
    resolvers,
  },
});

export default client;
