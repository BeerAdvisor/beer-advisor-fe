import React from 'react';
import { map } from 'ramda';
import { Field } from 'react-final-form';
import { MenuItem } from '@material-ui/core';

import { Select } from '../../components/ui';

export interface FilterProps {
  values: string[];
  name?: string;
}

export default ({ values, ...other }: FilterProps) => (
  // @ts-ignore
  <Field {...other} component={Select} items={mapSelectValues(values)} />
);

const mapSelectValues = map((value: string) => (
  <MenuItem key={value} value={value}>
    {value}
  </MenuItem>
));
