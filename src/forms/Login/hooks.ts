import { useState } from 'react';

export const useLogin = () => {
    const [login, setLogin] = useState(false);
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
