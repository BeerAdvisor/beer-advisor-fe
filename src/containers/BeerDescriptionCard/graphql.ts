import gql from 'graphql-tag';

export const SUGGEST_BEER_CHANGE_QUERY = gql`
    query suggestChange {
        beerTypes {
            name
        }
        breweries {
            name
        }
    }
`;
