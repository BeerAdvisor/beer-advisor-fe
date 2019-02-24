import React, { useState } from 'react';
import { Form, Field, FormRenderProps } from 'react-final-form';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { TextField, SmallButton } from '../../components';

import { LoginFormWrapper } from './style';

const onSubmit = async (data: any) => {
    console.log(data);
};

const buttonProps = {
    type: 'submit',
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

const useLogin = () =>  {
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return {
        login,
        setLogin,
        email,
        setEmail,
        password,
        setPassword,
    };
};

export default () => {
    const {login, setLogin, email, setEmail, password, setPassword} = useLogin();
    
    return  <form>
                <LoginFormWrapper>
                    <TextField onChange={setEmail} {...loginProps} type="text" />
                    <TextField onChange={setPassword}  {...passwordProps} type="text" />
                    <Mutation
                      mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                      variables={{ email, password, nickname: 'zhopa', sex: 'M', birthDate: new Date() }}
                      onCompleted={onSubmit}
                    >
                    {mutation => (
                        <SmallButton 
                            {...buttonProps}
                            onClick={mutation}
                            // disabled={submitting}>
                            >
                                Sign {login ? 'In' : 'Up'}
                        </ SmallButton>
                        )}
                </Mutation>
                </LoginFormWrapper>
            </form>;
};

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $nickname: String!, $sex: String!, $birthdate: DateTime!) {
    signup(email: $email, password: $password, nickname: $nickname, sex: $sex, birthdate: $birthdate) {
        user
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        user
    }
  }
`;
