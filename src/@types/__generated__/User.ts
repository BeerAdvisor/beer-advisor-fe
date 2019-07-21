/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Role } from "./globalTypes";

// ====================================================
// GraphQL query operation: user
// ====================================================

export interface user_user_beerRatings_beer {
  __typename: "Beer";
  id: string;
}

export interface user_user_beerRatings {
  __typename: "BeerRating";
  beer: user_user_beerRatings_beer;
}

export interface user_user {
  __typename: "User";
  email: string;
  role: Role;
  nickname: string;
  birthdate: any;
  name: string | null;
  surname: string | null;
  createdAt: any;
  updatedAt: any;
  beerRatings: user_user_beerRatings[] | null;
}

export interface user {
  user: user_user;
}
