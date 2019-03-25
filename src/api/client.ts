import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

// TODO: add typeDefs and resolvers for clients state
// export const typeDefs = gql`
//   extend type Query {
//     isLoggedIn: Boolean!
//     cartItems: [Launch]!
//   }
//   extend type Launch {
//     isInCart: Boolean!
//   }
//   extend type Mutation {
//     addOrRemoveFromCart(id: ID!): [Launch]
//   }
// `;

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
