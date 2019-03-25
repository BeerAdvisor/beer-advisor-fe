import gql from 'graphql-tag';

export const GET_BEER_FORM_DATA = gql`
query beerForm {
    beerForm @client {
        priceRange
        strongRange
        filter
        beerName
        beerType
      }
  }
`;
