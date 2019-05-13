import React, { memo, useCallback } from 'react';
import { FieldProps } from 'formik';

import { ErrorMessage } from '..';

export const Field = (Component: any) =>
    memo(
        ({
            field: { onChange, name, ...otherField },
            form: { touched, errors, setFieldValue },
            ...other
        }: FieldProps) => {
            const handleChange = useCallback(
                (e: any, value: any) =>
                    setFieldValue(
                        name,
                        value || e.target.value
                    ),
                []
            );

            return (
                <React.Fragment>
                    <Component
                        {...other}
                        onChange={handleChange}
                        name={name}
                        {...otherField}
                    />
                    {touched[name] && errors[name] && (
                        <ErrorMessage>{errors[name]}</ErrorMessage>
                    )}
                </React.Fragment>
            );
        }
    );

export default Field;
