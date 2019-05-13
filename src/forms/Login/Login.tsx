import React, { useState } from 'react';
import { MutationFn } from 'react-apollo';
import { ApolloClient, ApolloError } from 'apollo-boost';
import { RouteComponentProps } from 'react-router';
import { Formik, Field, FormikProps } from 'formik';

import { Mutation } from '../../graphql';
import { FormixInputField } from '../../components/formix';
import { InputField, SmallButton, ErrorMessage } from '../../components';
import { LoginMutationVariables, SignupMutationVariables, LoginMutation, SignupMutation } from '../../@types';

import { LoginFormWrapper, StyledAnchor } from './style';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from './mutation';
import { validate, isLoginMutation, isSignupMutation } from './helpers';

export type MutationAuth = LoginMutation | SignupMutation;

export type MutationLogin = MutationFn<MutationAuth, LoginMutationVariables | SignupMutationVariables>;

const onSubmit = (
    mutation: MutationLogin,
    client: ApolloClient<any>,
    history: RouteComponentProps['history'],
    login: boolean
) => async (variables: LoginMutationVariables | SignupMutationVariables) => {
    // TODO: This is maybe redundandt since we have a mutation response
    let finalVars = variables;
    if (!login) {
        finalVars = {...variables, sex: 'MALE', birthdate: new Date(), nickname: variables.email};
    }

    const result = await mutation({ variables: finalVars });
    if (result) {
        const { data } = result;

        let user;
        if (data) {
            if (isLoginMutation(data)) ({ login: { user }} = data);
            if (isSignupMutation(data)) ({ signup: { user }} = data);
        }

        if (user) {
            client.writeData({
                data: {
                    user,
                },
            });

        }
    }

    history.push('/');
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

const useLogin = () => {
    const [login, setLogin] = useState(true);

    const handleLogin = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setLogin(!login);
    };

    return {
        login,
        handleLogin,
    };
};

export default ({ history }: RouteComponentProps) => {
    const { login, handleLogin} = useLogin();

    const initialValues = login ? {email: '', password: ''} : {email: '', password: '', confirmPassword: ''};

    return (
        <Mutation mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}>
            {(mutation , {client, loading, error}) => (
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit(mutation, client, history, login)}
                    validate={validate}
                    render={generateForm(login, handleLogin, loading, error)}
                />
        )}
        </Mutation>
    );
};

const generateForm = (
        login: boolean,
        handleLogin: (e: React.MouseEvent<HTMLAnchorElement>) => void,
        loading: boolean, 
        error?: ApolloError
    ) => ({ handleSubmit }: FormikProps<any>) => (
    <form onSubmit={(handleSubmit)}>
        <LoginFormWrapper login={login}>
        <Field component={FormixInputField} {...loginProps} type="text" />
        <Field component={FormixInputField}  {...passwordProps} type="password" />
            {!login && (
                <React.Fragment>
                    <Field component={FormixInputField}  {...confirmPasswordProps} type="password" />
                </React.Fragment>
            )}
                <React.Fragment>
                    <SmallButton
                        {...buttonProps}
                        disabled={loading}
                    >
                        Sign {login ? 'In' : 'Up'}
                    </SmallButton>
                    {error && error.graphQLErrors[0] && <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>}
                </React.Fragment>
            <StyledAnchor onClick={handleLogin}>
                {login
                    ? "Don't have an account?"
                    : 'Already have an account?'}
            </StyledAnchor>
        </LoginFormWrapper>
    </form>
    );