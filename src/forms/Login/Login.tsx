import React, { useState } from 'react';
import { Mutation, MutationFn } from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-boost';

import { TextField, SmallButton } from '../../components';

import { LoginFormWrapper, StyledAnchor, ErrorMessage } from './style';

export interface MutationVariable {
    email: string;
    password: string;
    nickname: string;
    sex: string;
    birthDate: Date;
}

const onSubmit = (
    mutation: MutationFn<any, {
        email: string;
        password: string;
        nickname: string;
        sex: string;
        birthDate: Date;
    }>,
    client: ApolloClient<any>
) => (variables: any) => {
    mutation(variables);
    return async (data: any) => {
        debugger;
    };
};

const buttonProps = {
    fullWidth: true,
    variant: 'contained',
    color: 'primary',
};

const loginProps = {
    label: 'Login',
    name: 'login',
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = (changedLogin: boolean) => (
        event: React.MouseEvent<HTMLAnchorElement>
    ) => {
        setLogin(changedLogin);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleConfirmPassword = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setConfirmPassword(event.target.value);
    };

    return {
        login,
        handleLogin,
        email,
        handleEmail,
        password,
        handlePassword,
        confirmPassword,
        handleConfirmPassword,
    };
};

export default () => {
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

    return (
        <form>
            <LoginFormWrapper>
                <TextField
                    onChange={handleEmail}
                    value={email}
                    {...loginProps}
                    type="text"
                />
                <TextField
                    onChange={handlePassword}
                    value={password}
                    {...passwordProps}
                    type="password"
                />
                {!login && (
                    <React.Fragment>
                        <TextField
                            onChange={handleConfirmPassword}
                            value={confirmPassword}
                            {...confirmPasswordProps}
                            type="password"
                        />
                    </React.Fragment>
                )}
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
                    {(mutation, { loading, error, client }) => (
                    <React.Fragment>
                        <SmallButton
                            {...buttonProps}
                            onClick={onSubmit(mutation, client)}
                            disabled={loading}
                        >
                            Sign {login ? 'In' : 'Up'}
                        </SmallButton>
                        {error && <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>}
                    </React.Fragment>
                    )}
                </Mutation>
                <StyledAnchor onClick={handleLogin(!login)}>
                    {login
                        ? "Don't have an account?"
                        : 'Already have an account?'}
                </StyledAnchor>
            </LoginFormWrapper>
        </form>
    );
};

const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
        $email: String!
        $password: String!
        $nickname: String!
        $sex: String!
        $birthdate: DateTime!
    ) {
        signup(
            email: $email
            password: $password
            nickname: $nickname
            sex: $sex
            birthdate: $birthdate
        ) {
            user
        }
    }
`;

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(loginInput: { email: $email, password: $password }) {
            user {
                email
            }
        }
    }
`;
