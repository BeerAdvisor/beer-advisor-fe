import React from 'react';
import { RouteComponentProps } from 'react-router';

import { BeerDescriptionCard } from '../../containers';

export interface BeerRouteParams {
    beerId: string;
}
export type BeerInfoPageProps = RouteComponentProps<BeerRouteParams>;

export const BeerInfoPage = (props: BeerInfoPageProps) => {
    const { match: { params } } = props;

    return <BeerDescriptionCard beerId={params.beerId} {...props} />;
};

export default BeerInfoPage;
