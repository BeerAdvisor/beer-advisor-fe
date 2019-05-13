import { LoginMutation, SignupMutation, SignupMutation_signup, LoginMutation_login} from '../../@types';

export interface LoginErrors {
    confirmPassword?: string;
}

export interface LoginValues {
    email: string;
    password: string;
    confirmPassword?: string;
}

export const validate = (values: LoginValues): LoginErrors => {
    const errors: LoginErrors = {};

    if (values.confirmPassword && values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords must be the same';
    }
    return errors;
};

export function isLoginMutation(mutation: LoginMutation | SignupMutation): mutation is LoginMutation {
    return (mutation as LoginMutation).login !== undefined;
}

export function isSignupMutation(mutation: LoginMutation | SignupMutation): mutation is SignupMutation {
    return (mutation as SignupMutation).signup !== undefined;
}
