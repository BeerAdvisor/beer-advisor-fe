import React from 'react';
import { RouteComponentProps } from 'react-router';

import { BarDescriptionCard } from '../../containers';

export interface BeerRouteParams {
    barId: string;
}
export type BarInfoPageProps = RouteComponentProps<BeerRouteParams>;

export const BarInfoPage = (props: BarInfoPageProps) => {
    const { match: { params } } = props;

    return <BarDescriptionCard barId={params.barId} {...props} />;
};

export default BarInfoPage;
