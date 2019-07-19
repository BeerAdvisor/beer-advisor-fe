import React, { memo } from 'react';
import { map } from 'ramda';
import { Field } from 'formik';
import { MenuItem } from '@material-ui/core';

import { FormixSelectField } from '..';

export interface FilterProps {
  values: string[];
  name?: string;
}

export default memo(({ values, ...other }: FilterProps) => (
  <Field {...other} component={FormixSelectField} items={mapSelectValues(values)} />
));

const mapSelectValues = map((value: string) => (
  <MenuItem key={value} value={value}>
    {value}
  </MenuItem>
));
