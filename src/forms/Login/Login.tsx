import React, { useState } from 'react';
import { Mutation, MutationFn, MutationResult } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { FormRenderProps, Form } from 'react-final-form';
import { RouteComponentProps } from 'react-router';

import { LoginMutationVariables, SignupMutationVariables, LoginMutation, SignupMutation } from '../../@types';
import { InputField, SmallButton, ErrorMessage } from '../../components';

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
                            disabled={submitting || loading}
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
            {(mutation , {client, ...otherMutationProps}) => (
                <Form
            // @ts-ignore https://stackoverflow.com/questions/54269600/how-to-set-react-final-form-onsubmit-values-param-type-typescript
                    onSubmit={onSubmit(mutation, client, history, login)}
                    // @ts-ignore
                    validate={validate}
                    render={generateForm({ client, ...otherMutationProps })}
                />
        )}
        </Mutation>
    );
};
