/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: beer
// ====================================================

export interface beer_beer_beerComments_user {
  __typename: "User";
  nickname: string;
}

export interface beer_beer_beerComments {
  __typename: "BeerComment";
  id: string;
  user: beer_beer_beerComments_user | null;
  comment: string;
}

export interface beer_beer_brewery {
  __typename: "Brewery";
  name: string;
}

export interface beer_beer_type {
  __typename: "BeerType";
  name: string;
}

export interface beer_beer_beerRating {
  __typename: "BeerRating";
  rating: number;
}

export interface beer_beer {
  __typename: "Beer";
  name: string;
  id: string;
  strong: string | null;
  photo: string | null;
  avgRating: number | null;
  beerComments: beer_beer_beerComments[] | null;
  brewery: beer_beer_brewery | null;
  type: beer_beer_type | null;
  beerRating: beer_beer_beerRating[] | null;
}

export interface beer {
  beer: beer_beer;
}

export interface beerVariables {
  beerId: string;
}
