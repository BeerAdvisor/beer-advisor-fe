/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RateBeerMutation
// ====================================================

export interface RateBeerMutation_rateBeer {
  __typename: "Beer";
  avgRating: number | null;
}

export interface RateBeerMutation {
  rateBeer: RateBeerMutation_rateBeer;
}

export interface RateBeerMutationVariables {
  beerId: string;
  rating: number;
}
