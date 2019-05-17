/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Role } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login {
  __typename: "AuthPayload";
  email: string;
  role: Role;
  nickname: string;
  birthdate: any;
  name: string | null;
  surname: string | null;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}
