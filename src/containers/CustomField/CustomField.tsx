import React, { ReactElement, ChangeEvent, ChangeEventHandler, memo } from 'react';
import { Field, FieldProps } from 'react-final-form';

import { ErrorMessage } from '../../components';

export default (Component: any) => memo(({ name, onChange: fieldOnChange, ...other }: FieldProps) => (
    <Field name={name}>
      {({ input, meta }) => (
        <React.Fragment>
          <Component
              input ={input}
              {...other}
           />
          {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
        </React.Fragment>
      )}
    </Field>
  ));
  