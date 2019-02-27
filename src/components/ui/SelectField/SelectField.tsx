import React, { memo } from 'react';
import { map } from 'ramda';
import { Field } from 'react-final-form';
import { MenuItem } from '@material-ui/core';

import { Select } from '../Select';

export interface FilterProps {
  values: string[];
  name?: string;
}

export default memo(({ values, ...other }: FilterProps) => (
  // @ts-ignore
  <Field {...other} component={Select} items={mapSelectValues(values)} />
));

const mapSelectValues = map((value: string) => (
  <MenuItem key={value} value={value}>
    {value}
  </MenuItem>
));
