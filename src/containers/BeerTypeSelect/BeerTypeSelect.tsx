import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { MenuItem } from '@material-ui/core';
import { Select } from '../../components';
import { Field } from 'react-final-form';

const BeerTypeSelect = () => (
    <Query
    query={gql`
    {
      getBeers{
        type
      }
    }
    `}
  >
    {({ loading, error, data: { getBeers: beers} }) => {
      if (loading) return [<MenuItem key={'Empty'} value={'Empty'}>{'Empty'}</MenuItem>];
      if (error) return [<MenuItem key={'Empty'} value={'Empty'}>{'Empty'}</MenuItem>];

      const beerTypes = beers.map(({ type }: { type: string}) => (
        <MenuItem key={type} value={type}>{type}</MenuItem>
        ));

        // @ts-ignore
      return <Field name="beerType" component={Select} items={beerTypes} />;
    }}
  </Query>
);

export default BeerTypeSelect;