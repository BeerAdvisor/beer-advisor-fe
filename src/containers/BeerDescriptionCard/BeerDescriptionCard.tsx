import React from 'react';
import gql from 'graphql-tag';

import { Query } from '../../graphql';
import { DescriptionCard } from '../../components';
import { beer } from '../../@types';
import { GuaranteedQueryResult } from '../../@types/CustomGqlTypes';

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

const renderBeerDecriptionCard = ({ data }: GuaranteedQueryResult<beer>) => (
    <DescriptionCard beer={data.beer} />
);

export const BeerDescriptionCard = ({
    beerId,
    ...other
}: BeerDescriptionCardProps) => {
    return (
        <Query query={GET_BEER_INFO} variables={{ beerId }}>
            {renderBeerDecriptionCard}
        </Query>
    );
};

export default BeerDescriptionCard;
