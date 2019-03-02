import React, { useState } from 'react';
import { Mutation, MutationFn, MutationResult } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { FormRenderProps, Form } from 'react-final-form';
import { RouteComponentProps } from 'react-router';

import { InputField, SmallButton, ErrorMessage } from '../../components';

import { LoginFormWrapper, StyledAnchor } from './style';
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
    $email: string;
    $password: string;
    $nickname: string;
    $sex: string;
    $birthDate: Date;
}>;

const onSubmit = (
    mutation: MutationLogin,
    client: ApolloClient<any>,
    history: RouteComponentProps['history']
) => (variables: any) => {
    mutation({ variables });
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

const useLogin = () => {
    const [login, setLogin] = useState(true);

    const handleLogin = (changedLogin: boolean) => (
        event: React.MouseEvent<HTMLAnchorElement>
    ) => {
        setLogin(changedLogin);
    };

    return {
        login,
        handleLogin,
    };
};

export default ({ history }: RouteComponentProps) => {
    const { login, handleLogin} = useLogin();

    const generateForm = ({ loading, error }: MutationResult<any>) => (
            { handleSubmit, submitting }: FormRenderProps
        ) => (
        <form onSubmit={(handleSubmit)}>
            <LoginFormWrapper login={login}>
            <InputField {...loginProps} type="text" />
            <InputField {...passwordProps} type="password" />
                {!login && (
                    <React.Fragment>
                        <InputField {...confirmPasswordProps} type="password" />
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
                <StyledAnchor onClick={handleLogin(!login)}>
                    {login
                        ? "Don't have an account?"
                        : 'Already have an account?'}
                </StyledAnchor>
            </LoginFormWrapper>
        </form>
    );

    return (
        <Mutation mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}>
            {(mutation, {client, ...otherMutationProps}) => (
                <Form
                    onSubmit={onSubmit(mutation, client, history)}
                    render={generateForm({ client, ...otherMutationProps })}
                    // @ts-ignore
                    validate={validate}
                />
        )}
        </Mutation>
    );
};
