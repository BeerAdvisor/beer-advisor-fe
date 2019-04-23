import React from 'react';
import { RouteComponentProps } from 'react-router';

export interface BeerRouteParams {
    beerId: string;
}
export type BeerInfoPageProps = RouteComponentProps<BeerRouteParams>;

export const BeerInfoPage = (props: BeerInfoPageProps) => {
    const { match: { params } } = props;

    return <div>{params.beerId}</div>;
};

export default BeerInfoPage;
