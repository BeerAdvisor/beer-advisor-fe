import React, { memo } from 'react';
import { Field as ReactFinalFormField, FieldProps } from 'react-final-form';

import { ErrorMessage } from '..';

export const Field =  (Component: any) => memo(({ name, onChange: fieldOnChange, ...other }: FieldProps) => (
    <ReactFinalFormField name={name}>
      {({ input, meta }) => (
        <React.Fragment>
          <Component
              input={input}
              {...other}
           />
          {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
        </React.Fragment>
      )}
    </ReactFinalFormField>
  ));
  
export default Field;
