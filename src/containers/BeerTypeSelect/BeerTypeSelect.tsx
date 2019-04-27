import React from 'react';
import { MenuItem } from '@material-ui/core';
import { Field } from 'react-final-form';
import { map } from 'ramda';

import { Select } from '../../components/ui';
import { beerTypes_beerTypes } from '../../@types';

export interface BeerTypeSelectProps {
  beerTypes: beerTypes_beerTypes[] | null;
}

const BeerTypeSelect = ({ beerTypes, ...other }: BeerTypeSelectProps) => {
      let items = [<MenuItem key="beerItem0" value="">""</MenuItem>];
      
      if (beerTypes) {
          items = map(({ name }: beerTypes_beerTypes) => (
            <MenuItem key={name} value={name}>{name}</MenuItem>
          ))(beerTypes);
      }

      // @ts-ignore
      return <Field {...other} name="beerType" component={Select} items={items} />;
};

export default BeerTypeSelect;