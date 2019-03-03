import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { MenuItem } from '@material-ui/core';
import { Field } from 'react-final-form';

import { Select } from '../../components/ui';

const BEER_TYPES_QUERY = gql`
query beerTypes{
  beerTypes{
    name
  }
}
`;

const BeerTypeSelect = (props: any) => (
    <Query
    query={BEER_TYPES_QUERY}
  >
    {({ loading, error, data }) => {
      if (loading || error) return null;
      const { beerTypes: beers} = data;

      const beerTypes = beers.map(({ name }: { name: string}) => (
        <MenuItem key={name} value={name}>{name}</MenuItem>
        ));

        // @ts-ignore
      return <Field {...props} name="beerType" component={Select} items={beerTypes} />;
    }}
  </Query>
);

export default BeerTypeSelect;