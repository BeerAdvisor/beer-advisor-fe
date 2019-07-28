import gql from 'graphql-tag';

export const GET_BEER_FORM_DATA = gql`
query beerForm {
    beerForm @client {
        priceRange
        strongRange
        filter
        beerName
        beerType
      }
  }
`;

export const GET_BAR_FORM_DATA = gql`
query barForm {
    barForm @client {
        maxBeerPrice
        openHours
        filter
        barName
      }
  }
`;

export const GEET_BEER_FORM_STATUS = gql`
query beerFormStatus {
    isMainFormOpened @client
  }
`;

export const GET_USER_CORDINATES = gql`
query getUserCordinates {
    userCoordinates @client {
        lat
        lon
    }
  }
`;

export const GET_USER = gql`
query user {
    user @client {
        email,
        role,
        nickname,
        birthdate,
        name,
        surname,
        createdAt,
        updatedAt,
        beerRatings {
            beer {
                id
            }
        }
    }
  }
`;

export const GET_BEER_INFO = gql`
    query beer($beerId: ID!) {
        beer(id: $beerId) {
            name
            id
            strong
            photo
            avgRating
            includedIn {
                price
                beerList{
                  bar {
                    id
                    name
                    photos
                    avgRating
                  }
                }
              }
            beerComments {
                id
                user {
                    nickname
                }
                comment
            }
            brewery {
                name
            }
            type {
                name
            }
            beerRating {
                rating
            }
        }
    }
`;

export const GET_BAR_INFO = gql`
    query bar($barId: ID!) {
        bar(id: $barId) {
            name
            id
            address
            openTime
            closeTime
            avgRating
            photos
            barComments {
                id
                user {
                    nickname
                }
                comment
            }
            barRating {
                rating
            }
            beerList {
                items {
                    price
                    beer {
                        id
                        photo
                        name
                        avgRating
                    }
                }
            }
        }
    }
`;