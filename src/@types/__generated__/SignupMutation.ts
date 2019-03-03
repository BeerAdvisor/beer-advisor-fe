/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Sex, Role } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SignupMutation
// ====================================================

export interface SignupMutation_signup_user {
  __typename: "User";
  email: string;
  role: Role;
  nickname: string;
  birthdate: any;
  name: string | null;
  surname: string | null;
  createdAt: any;
  updatedAt: any;
}

export interface SignupMutation_signup {
  __typename: "AuthPayload";
  user: SignupMutation_signup_user;
}

export interface SignupMutation {
  signup: SignupMutation_signup;
}

export interface SignupMutationVariables {
  email: string;
  password: string;
  nickname: string;
  sex: Sex;
  birthdate: any;
}
