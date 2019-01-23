import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { MenuItem } from '@material-ui/core';
import { Select } from '../../components';
import { Field } from 'react-final-form';

const BeerTypeSelect = (props: any) => (
    <Query
    query={gql`
    {
      getBeers{
        type
      }
    }
    `}
  >
    {({ loading, error, data }) => {
      // TODO: consider spinner for whole form, error state? 
      if (loading || error) return null;
      const { getBeers: beers} = data;

      const beerTypes = beers.map(({ type }: { type: string}) => (
        <MenuItem key={type} value={type}>{type}</MenuItem>
        ));

        // @ts-ignore
      return <Field {...props} name="beerType" component={Select} items={beerTypes} />;
    }}
  </Query>
);

export default BeerTypeSelect;