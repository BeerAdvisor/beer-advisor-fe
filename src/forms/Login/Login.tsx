import React from 'react';
import { Mutation, MutationFn, MutationResult } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { FormRenderProps, Form } from 'react-final-form';
import { RouteComponentProps } from 'react-router';

import { TextField, SmallButton, ErrorMessage } from '../../components';
import { Field } from '../../containers';

import { LoginFormWrapper, StyledAnchor } from './style';
import { useLogin } from './hooks';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from './mutation';
import { validate } from './helpers';

export interface MutationVariable {
    email: string;
    password: string;
    nickname: string;
    sex: string;
    birthDate: Date;
}

export type MutationLogin = MutationFn<any, {
    email: string;
    password: string;
    nickname: string;
    sex: string;
    birthDate: Date;
}>;

const onSubmit = (
    mutation: MutationLogin,
    client: ApolloClient<any>,
    history: RouteComponentProps['history']
) => (variables: any) => {
    mutation(variables);
    return async (data: any) => {
        debugger;
    };
};

const buttonProps = {
    type: 'submit',
    fullWidth: true,
    variant: 'contained',
    color: 'primary',
};

const loginProps = {
    label: 'E-mail',
    name: 'email',
};

const passwordProps = {
    label: 'Password',
    name: 'password',
};

const confirmPasswordProps = {
    label: 'Confirm password',
    name: 'confirmPassword',
};

export default ({ history }: RouteComponentProps) => {
    const {
        login,
        handleLogin,
        email,
        handleEmail,
        password,
        handlePassword,
        confirmPassword,
        handleConfirmPassword,
    } = useLogin();

    const generateForm = ({ loading, error }: MutationResult<any>) => (
            { handleSubmit, submitting }: FormRenderProps
        ) => (
        <form onSubmit={handleSubmit}>
            <LoginFormWrapper login={login}>
            {/* 
            // @ts-ignore */ }
            <Field component={TextField} onChange={handleEmail} value={email} {...loginProps} type="text">
                <TextField />
            </Field>
            <Field component={TextField} onChange={handlePassword} value={password} {...passwordProps} type="password">
                <TextField />
            </Field>
                {!login && (
                    <React.Fragment>
                        {/* 
                        // @ts-ignore */ }
                        <Field 
                            component={TextField}
                            onChange={handleConfirmPassword}
                            value={confirmPassword}
                            {...confirmPasswordProps}
                            type="password">
                            <TextField />
                        </Field>
                    </React.Fragment>
                )}
                    <React.Fragment>
                        <SmallButton
                            {...buttonProps}
                            disabled={loading}
                        >
                            Sign {login ? 'In' : 'Up'}
                        </SmallButton>
                        {error && <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>}
                    </React.Fragment>
                <StyledAnchor onClick={handleLogin(!login)}>
                    {login
                        ? "Don't have an account?"
                        : 'Already have an account?'}
                </StyledAnchor>
            </LoginFormWrapper>
        </form>
    );

    return (
        <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{
                email,
                password,
                nickname: 'zhopa',
                sex: 'M',
                birthDate: new Date(),
            }}
        >
            {(mutation, {client, ...otherMutationProps}) => (
                <Form
                    // @ts-ignore
                    onSubmit={onSubmit(mutation, client, history)}
                    render={generateForm({ client, ...otherMutationProps })}
                    // @ts-ignore
                    validate={validate}
                />
        )}
        </Mutation>
    );
};
