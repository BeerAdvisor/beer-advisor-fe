import React from 'react';
import gql from 'graphql-tag';
import { RouteComponentProps } from 'react-router';

import { Query, GET_BAR_FORM_DATA } from '../../graphql';
import { getCurrentUserPosition } from '../../utils';

import BarInfoCard, { BarRouteParams } from './BarInfoCard';

const FIND_BARS = gql`
    query FindBars(
        $name: String
        $openNow: Boolean
        $distance: DistanceSearch
    ) {
        findBars(
            findBarInput: {
                name: $name
                openNow: $openNow
                distance: $distance
            }
        ) {
            name
            id
            openTime
            closeTime
            phone
            address
            photos
            avgRating
            beerList {
                items {
                    price
                    beer {
                        id
                        photo
                        name
                        avgRating
                    }
                }
            }
        }
    }
`;

const BarInfoCardContainer = (props: RouteComponentProps<BarRouteParams>) => (
    <Query query={GET_BAR_FORM_DATA}>
        {({ data: { barForm: { barName }, userCoordinates: { __typename, ...other } } }) => (
            <Query query={FIND_BARS} variables={{ name: barName, distance: { ...other } }}>
                {({ data }) => <BarInfoCard {...props} searchResult={data} />}
            </Query>
        )}
    </Query>
);

export default BarInfoCardContainer;
