import React from 'react';

import { Query, GET_BEER_INFO } from '../../graphql';
import { DescriptionCard, AvailabilityCard } from '../../components';
import { beer } from '../../@types';
import { GuaranteedQueryResult } from '../../@types/CustomGqlTypes';

import { BeerDescriptionCardContainer } from './style';

export interface BeerDescriptionCardProps {
    beerId: string;
}
export const BeerDescriptionCard = ({
    beerId,
    ...other
}: BeerDescriptionCardProps) => {
    return (
        <Query query={GET_BEER_INFO} variables={{ beerId }}>
            {({ data }: GuaranteedQueryResult<beer>) => (
                <BeerDescriptionCardContainer>
                    <DescriptionCard beer={data.beer} {...other} />
                    <AvailabilityCard />
                </BeerDescriptionCardContainer>
            )}
        </Query>
    );
};

export default BeerDescriptionCard;
