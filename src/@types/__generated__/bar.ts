/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: bar
// ====================================================

export interface bar_bar_barComments_user {
  __typename: "User";
  nickname: string;
}

export interface bar_bar_barComments {
  __typename: "BarComment";
  id: string;
  user: bar_bar_barComments_user | null;
  comment: string;
}

export interface bar_bar_barRating {
  __typename: "BarRating";
  rating: number;
}

export interface bar_bar_beerList_items_beer {
  __typename: "Beer";
  id: string;
  photo: string | null;
  name: string;
  avgRating: number | null;
}

export interface bar_bar_beerList_items {
  __typename: "BeerListItem";
  price: number;
  beer: bar_bar_beerList_items_beer;
}

export interface bar_bar_beerList {
  __typename: "BeerList";
  items: bar_bar_beerList_items[] | null;
}

export interface bar_bar {
  __typename: "Bar";
  name: string;
  id: string;
  address: string;
  openTime: any | null;
  closeTime: any | null;
  barComments: bar_bar_barComments[] | null;
  barRating: bar_bar_barRating[] | null;
  beerList: bar_bar_beerList;
}

export interface bar {
  bar: bar_bar;
}

export interface barVariables {
  barId: string;
}
