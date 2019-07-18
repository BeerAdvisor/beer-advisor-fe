import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Query, GET_BEER_INFO } from '../../graphql';
import { GuaranteedQueryResult } from '../../@types/CustomGqlTypes';
import { beer } from '../../@types';

import BeerDescriptionCard from './BeerDescriptionCard';

export interface BarDescriptionCardContainerProps extends RouteComponentProps {
    beerId: string;
}
const Container = ({ beerId, ...other }: BarDescriptionCardContainerProps) => (
    <Query query={GET_BEER_INFO} variables={{ beerId }}>
    {({ data }: GuaranteedQueryResult<beer>) => (
        <BeerDescriptionCard {...other} beerId={beerId} beer={data.beer} />
    )}
    </Query>
);

export default Container;
