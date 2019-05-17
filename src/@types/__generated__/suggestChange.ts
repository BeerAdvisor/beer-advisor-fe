/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: suggestChange
// ====================================================

export interface suggestChange_beerTypes {
  __typename: "BeerType";
  name: string;
}

export interface suggestChange_breweries {
  __typename: "Brewery";
  name: string;
}

export interface suggestChange {
  beerTypes: suggestChange_beerTypes[] | null;
  breweries: suggestChange_breweries[] | null;
}
