import React from 'react';
import { MenuItem } from '@material-ui/core';
import { Field as FormikField } from 'formik';
import { map } from 'ramda';

import { beerTypes_beerTypes } from '../../@types';
import { FormixSelectField } from '../formix';

export interface BeerTypeSelectProps {
  beerTypes: beerTypes_beerTypes[] | null;
  isReactFinalForm?: boolean;
  name?: string;
}

const BeerTypeSelect = ({ beerTypes, name, isReactFinalForm = true, ...other }: BeerTypeSelectProps) => {
      let items = [<MenuItem key={name} value={name}>{name}</MenuItem>];
      
      if (beerTypes) {
          items = map(({ name: beerName }: beerTypes_beerTypes) => (
            <MenuItem key={beerName} value={beerName}>{beerName}</MenuItem>
          ))(beerTypes);
      }

      return <FormikField {...other} name={name} component={FormixSelectField} items={items} />;
};

export default BeerTypeSelect;