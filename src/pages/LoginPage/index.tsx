import React from 'react';

import { Login } from '../../forms';

import { LoginPage } from './style';

export default (props: any) => (
    <LoginPage>
            <Login {...props}/>
    </LoginPage>
);
