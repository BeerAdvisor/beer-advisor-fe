import React from 'react';
import { Route } from 'react-router-dom';

import { CombinedForms } from '../../forms';
import BeerResultPage from '../BeerResultPage';
import { BeerInfoPage } from '../BeerInfoPage';

import { WithFormPageWrapper } from './style';

const routes = [
    {
        path: '/beers',
        main: (props: any) => <BeerResultPage {...props} />,
    },
    {
        path: '/bars',
        main: (props: any) => <BeerResultPage {...props} />,
    },
    {
        path: '/beers/:beerId',
        main: (props: any) => <BeerResultPage {...props} />,
    },
    {
        path: '/beer/:beerId',
        main: (props: any) => <BeerInfoPage {...props} />,
    },
];

const WithFormPage = ({ match, ...other }: any) => (
    <WithFormPageWrapper>
        <CombinedForms variant="small" {...other} />
                {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={`${match.path}${route.path}`}
                            component={route.main}
                        />
                ))}
    </WithFormPageWrapper>
);

export default WithFormPage;
