import { graphql, QueryOpts } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'ramda';

import { withLoadingHandler, GET_BEER_FORM_DATA } from '../../graphql';
import { FindBeersVariables } from '../../@types/__generated__/FindBeers';

import BeerInfoCard, { BeerInfoProps } from './BeerInfoCard';
import { BeerInfoCardStub } from './style';

const FIND_BEERS = gql`
query FindBeers(
    $name: String
    $type: String
    $strong: String
    $brewery: String 
) {
    findBeers(
        findBeerInput: { name: $name, type: $type, strong: $strong, brewery: $brewery }
    ) {
        name,
        id,
        strong,
        photo,
        avgRating,
        brewery {
        	name
        },
        type {
        	name
        },
        beerRating {
        	rating
        },
    }
}
`;

const defaultQuery: FindBeersVariables = {
    name: '',
    type: '',
    strong: '',
    brewery: '',
};

const getFindBeersQuery: ((props: BeerInfoProps) => QueryOpts<FindBeersVariables>) = ownProps => {
    let variables = defaultQuery;

    const { data: { beerForm }} = ownProps;

    if (beerForm) {
        const { beerName, beerType, strongRange } = beerForm;
        variables = {
            name: beerName || '',
            type: beerType || '',
            strong: '',
            brewery: '',
        };
    }

    return { variables };
};

export default compose(
  graphql<BeerInfoProps>(GET_BEER_FORM_DATA, { name: 'data' }),
  graphql<BeerInfoProps>(FIND_BEERS, {
        options: getFindBeersQuery,
        name: 'searchResult',
    }),
  (Component: React.ComponentType<BeerInfoProps>) => withLoadingHandler({
        Component,
        CircularProgressContainer: BeerInfoCardStub,
        dataPropName: 'searchResult',
    })
)(BeerInfoCard);
