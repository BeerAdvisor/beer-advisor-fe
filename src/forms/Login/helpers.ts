export interface LoginErrors {
    confirmPassword?: string;
}

export interface LoginValues {
    email: string;
    password: string;
    confirmPassword: string;
}

export const validate = (values: LoginValues): LoginErrors => {
    const errors: LoginErrors = {};

    if (values.confirmPassword && values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords must be the same';
    }
    return errors;
};
