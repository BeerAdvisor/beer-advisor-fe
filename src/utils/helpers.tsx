import React, { ReactNode } from 'react';
import { map, reduce, addIndex } from 'ramda';
import compose from 'ramda/es/compose';
import toLower from 'ramda/es/toLower';

import { SMALL_BP_UP } from '../theme';
import styled from '../styled-components';
import { client } from '../api';
import { GET_USER_CORDINATES } from '../graphql';
import {
    getUserCordinates_userCoordinates,
    getUserCordinates,
} from '../@types/__generated__/getUserCordinates';

import { useMobileDevice } from './hooks';

// TODO: Label values will be redone as table
export const LabelValueContainer = styled.span`
    width: auto;

    ${SMALL_BP_UP} {
        &:not(:first-child) {
            margin-left: 2rem;
        }
    }
`;

export interface LabelValue {
    label: string;
    value?: ReactNode;
}

let labelsIndex = 0;
export const mapLabelValues = map<LabelValue, any>(
    ({ label, value }: LabelValue) => {
        const finalValue = ` ${value ? value : 'Unknown'}`;
        return (
            <LabelValueContainer key={`${label}${labelsIndex++}`}>
                {useMobileDevice() ? (
                    finalValue
                ) : (
                    <>
                        {label}:{finalValue}
                    </>
                )}
            </LabelValueContainer>
        );
    }
);

export const mapIndexed = addIndex<any>(map);
export const reduceIndexed = addIndex(reduce);

export const jsNormalize = (str: string) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const normalizeString = compose(
    toLower,
    jsNormalize
);

export interface Geolocation {
    lat: number;
    lon: number;
}

interface Units {
    km: number;
    mile: number;
    meter: number;
    nmi: number;
}

const UNITS: Units = {
    km: 6371,
    mile: 3960,
    meter: 6371000,
    nmi: 3440,
};

const toRadians = (num: number) => (num * Math.PI) / 180;

interface CalculateDistanceArgs {
    unit?: keyof Units;
    destination?: Geolocation;
}
export const calculateDistance = ({
    unit = 'meter',
    // Prague Krymska
    destination: { lat: destinationLat, lon: destinationLon } = {
        lat: 50.07157,
        lon: 14.44718,
    },
}: CalculateDistanceArgs = {}) => {
    const result = client.readQuery<getUserCordinates>({
        query: GET_USER_CORDINATES,
    });
    if (result) {
        const {
            userCoordinates: { lat: originLat, lon: originLon },
        } = result;
        if (originLat && originLon) {
            const R = unit in UNITS ? UNITS[unit] : UNITS.km;
            const dLat = toRadians(destinationLat - originLat);
            const dLon = toRadians(destinationLon - originLon);
            const lat1 = toRadians(originLat);
            const lat2 = toRadians(destinationLat);

            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.sin(dLon / 2) *
                    Math.sin(dLon / 2) *
                    Math.cos(lat1) *
                    Math.cos(lat2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            return Math.trunc( R * c );
        }

    }
    return 0;
};

const geolocationCallback = (position: Position) => {
    client.writeData({
        data: {
            userCoordinates: {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
                __typename: 'UserCoordinates',
            },
        },
    });
};

export const getCurrentUserPosition = (): void => {
    navigator.geolocation.getCurrentPosition(geolocationCallback);
};
