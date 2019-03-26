import { graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'ramda';

import { withLoadingHandler, GET_BEER_FORM_DATA } from '../../graphql';

import MainForm, { MainFormProps } from './MainForm';
import { MainFormContainerStub } from './style';

const BEER_TYPES_QUERY = gql`
query beerTypes{
  beerTypes{
    name
  }
}
`;

export const BEER_TYPES = 'beerTypesData';

export default compose(
  graphql<MainFormProps>(BEER_TYPES_QUERY, { name: BEER_TYPES }),
  graphql<MainFormProps>(GET_BEER_FORM_DATA, { name: 'data' }),
  (Component: React.ComponentType<MainFormProps>) => withApollo(Component),
  (Component: React.ComponentType<MainFormProps>) => withLoadingHandler({
    Component,
    CircularProgressContainer: MainFormContainerStub,
    dataPropName: BEER_TYPES,
  })
)(MainForm);
