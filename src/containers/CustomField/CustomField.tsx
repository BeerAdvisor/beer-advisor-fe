import React, { ReactElement, ChangeEvent, ChangeEventHandler } from 'react';
import { Field, FieldProps } from 'react-final-form';

import { ErrorMessage } from '../../components';

interface ChangeHandler {
    fieldOnChange: ChangeEventHandler;
    inputOnChange: ChangeEventHandler;
}

const handleChange = ({ fieldOnChange, inputOnChange }: ChangeHandler) => (e: ChangeEvent) => {
    fieldOnChange(e);
    inputOnChange(e);
};

export default ({ children, name, onChange: fieldOnChange, ...other }: FieldProps) => (
    <Field name={name}>
      {({ input: { onChange: inputOnChange, ...inputOther }, meta }) => (
        <React.Fragment>
          {children &&
            React.cloneElement(children as ReactElement<any>, {
              ...inputOther,
              ...other,
              onChange: handleChange({ fieldOnChange, inputOnChange }),
            })}
          {meta.error && meta.touched && <ErrorMessage>meta.error</ErrorMessage>}
        </React.Fragment>
      )}
    </Field>
  );
  