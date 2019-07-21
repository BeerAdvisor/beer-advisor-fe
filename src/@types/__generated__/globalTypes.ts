/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum Sex {
  FEMALE = "FEMALE",
  MALE = "MALE",
}

export interface BarFormInput {
  maxBeerPrice?: number[] | null;
  openHours?: number[] | null;
  filter?: string | null;
  barName?: string | null;
}

export interface BeerFormInput {
  priceRange?: number[] | null;
  strongRange?: number[] | null;
  filter?: string | null;
  beerName?: string | null;
  beerType?: string | null;
}

export interface DistanceSearch {
  lat: string;
  long: string;
  distance: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
