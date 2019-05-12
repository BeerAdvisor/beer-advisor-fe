import React from 'react';

import { Login } from '../../forms';

import { LoginPage as LoginPageWrapper } from './style';

const LoginPage =  (props: any) => (
    <LoginPageWrapper>
            <Login {...props}/>
    </LoginPageWrapper>
);

export default LoginPage;
