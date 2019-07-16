import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Query, GET_BAR_INFO } from '../../graphql';
import { GuaranteedQueryResult } from '../../@types/CustomGqlTypes';
import { bar } from '../../@types/__generated__/bar';

import { BarDescriptionCard } from './BarDescriptionCard';

export interface BarDescriptionCardContainerProps extends RouteComponentProps {
    barId: string;
}
const Container = ({ barId, ...other }: BarDescriptionCardContainerProps) => (
    <Query query={GET_BAR_INFO} variables={{ barId }}>
    {({ data }: GuaranteedQueryResult<bar>) => (
        <BarDescriptionCard {...other} barId={barId} bar={data.bar} />
    )}
    </Query>
);

export default Container;
