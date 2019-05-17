import React from 'react';
import { MenuItem } from '@material-ui/core';
import { Field as FormikField } from 'formik';
import { map } from 'ramda';

import { FormixSelectField } from '../formix';

export interface Type {
  name: string;
}

export interface TypeSelectProps {
  types: Type[]| null;
  name?: string;
  label?: string;
}

const TypeSelect = ({ types, name, ...other }: TypeSelectProps) => {
      let items = [<MenuItem key={name} value={name}>{name}</MenuItem>];
      
      if (types) {
          items = map(({ name: typeName }: Type) => (
            <MenuItem key={typeName} value={typeName}>{typeName}</MenuItem>
          ))(types);
      }

      return <FormikField {...other} name={name} component={FormixSelectField} items={items} />;
};

export default TypeSelect;