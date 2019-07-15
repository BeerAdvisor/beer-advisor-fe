/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { DistanceSearch } from "./globalTypes";

// ====================================================
// GraphQL query operation: FindBars
// ====================================================

export interface FindBars_findBars_barRating {
  __typename: "BarRating";
  rating: number;
}

export interface FindBars_findBars_beerList_items_beer {
  __typename: "Beer";
  id: string;
  name: string;
  avgRating: number | null;
}

export interface FindBars_findBars_beerList_items {
  __typename: "BeerListItem";
  price: number;
  beer: FindBars_findBars_beerList_items_beer;
}

export interface FindBars_findBars_beerList {
  __typename: "BeerList";
  items: FindBars_findBars_beerList_items[] | null;
}

export interface FindBars_findBars {
  __typename: "Bar";
  name: string;
  id: string;
  openTime: any | null;
  closeTime: any | null;
  phone: string | null;
  address: string;
  barRating: FindBars_findBars_barRating[] | null;
  beerList: FindBars_findBars_beerList;
}

export interface FindBars {
  findBars: FindBars_findBars[] | null;
}

export interface FindBarsVariables {
  name?: string | null;
  openNow?: boolean | null;
  distance?: DistanceSearch | null;
}
