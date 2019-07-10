/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CommentBeer
// ====================================================

export interface CommentBeer_commentBeer {
  __typename: "BeerComment";
  id: string;
}

export interface CommentBeer {
  commentBeer: CommentBeer_commentBeer;
}

export interface CommentBeerVariables {
  beerId: string;
  comment: string;
}
