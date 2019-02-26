import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
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

export const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(loginInput: { email: $email, password: $password }) {
            user {
                email
            }
        }
    }
`;
