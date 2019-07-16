/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RateBarMutation
// ====================================================

export interface RateBarMutation_rateBar {
  __typename: "Bar";
  id: string;
}

export interface RateBarMutation {
  rateBar: RateBarMutation_rateBar;
}

export interface RateBarMutationVariables {
  barId: string;
  rating: number;
}
