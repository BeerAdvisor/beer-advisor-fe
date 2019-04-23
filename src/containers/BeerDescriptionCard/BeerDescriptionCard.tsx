import React from 'react';
import gql from 'graphql-tag';

import { Query } from '../../graphql';

export interface BeerDescriptionCardProps {
    beerId: string;
}

const GET_BEER_INFO = gql`
    query beer($beerId: ID!) {
        beer(id: $beerId) {
            name
            id
            strong
            photo
            avgRating
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

export const BeerDescriptionCard = ({
    beerId,
    ...other
}: BeerDescriptionCardProps) => {
    return (
        <Query query={GET_BEER_INFO} variables={{ beerId }}>
            {({ data }) => {

                return (
                    <div>{data.beer.name}</div>
                );
            }}
        </Query>
    );
};

export default BeerDescriptionCard;
