/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindBeers
// ====================================================

export interface FindBeers_findBeers_includedIn_beerList_bar {
  __typename: "Bar";
  id: string;
  name: string;
  photos: string[] | null;
  avgRating: number | null;
}

export interface FindBeers_findBeers_includedIn_beerList {
  __typename: "BeerList";
  bar: FindBeers_findBeers_includedIn_beerList_bar;
}

export interface FindBeers_findBeers_includedIn {
  __typename: "BeerListItem";
  price: number;
  beerList: FindBeers_findBeers_includedIn_beerList;
}

export interface FindBeers_findBeers_brewery {
  __typename: "Brewery";
  name: string;
}

export interface FindBeers_findBeers_type {
  __typename: "BeerType";
  name: string;
}

export interface FindBeers_findBeers_beerRating {
  __typename: "BeerRating";
  rating: number;
}

export interface FindBeers_findBeers {
  __typename: "Beer";
  name: string;
  id: string;
  strong: string | null;
  photo: string | null;
  avgRating: number | null;
  includedIn: FindBeers_findBeers_includedIn[] | null;
  brewery: FindBeers_findBeers_brewery | null;
  type: FindBeers_findBeers_type | null;
  beerRating: FindBeers_findBeers_beerRating[] | null;
}

export interface FindBeers {
  findBeers: FindBeers_findBeers[] | null;
}

export interface FindBeersVariables {
  name?: string | null;
  type?: string | null;
  strong?: string | null;
  brewery?: string | null;
}
