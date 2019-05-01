import React from 'react';
import gql from 'graphql-tag';

import { Query, GET_BEER_INFO } from '../../graphql';
import { DescriptionCard } from '../../components';
import { beer } from '../../@types';
import { GuaranteedQueryResult } from '../../@types/CustomGqlTypes';

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
                <DescriptionCard beer={data.beer} {...other} />
            )}
        </Query>
    );
};

export default BeerDescriptionCard;
