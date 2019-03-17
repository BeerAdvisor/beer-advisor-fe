import { graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'ramda';

import { withLoadingHandler } from '../../graphql';

import MainForm, { MainFormProps } from './MainForm';

const GET_BEER_FORM_DATA = gql`
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

const BEER_TYPES_QUERY = gql`
query beerTypes{
  beerTypes{
    name
  }
}
`;

// TODO: Add proper loading, send beer types to select
export default compose(
  graphql<MainFormProps>(BEER_TYPES_QUERY, { name: 'beerTypesData' }),
  graphql<MainFormProps>(GET_BEER_FORM_DATA, { name: 'data' }),
  (Component: React.ComponentType<MainFormProps>) => withApollo(Component),
  (Component: React.ComponentType<MainFormProps>) => withLoadingHandler(Component)
)(MainForm);
