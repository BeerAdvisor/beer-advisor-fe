import React from 'react';
import { CircularProgress as MuiCircularProgress } from '@material-ui/core';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';

import styled from '../../styled-components';

export const CircularProgressContainerElement = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;
`;

export interface LoadingConfiguration {
    dataPropName?: string;
    Loader?: React.ComponentType<CircularProgressProps>;
    CircularProgressContainer?: React.ComponentType<any>;
}

const withLoadingHandler = ({
    Loader = MuiCircularProgress,
    CircularProgressContainer = CircularProgressContainerElement,
    dataPropName = 'data',
}: LoadingConfiguration) => <T extends any>(Component: React.ComponentType<T>) => 
 (props: T) => {
    if (props[dataPropName].loading) {
        return (
            <CircularProgressContainer>
                <Loader size={100} />
            </CircularProgressContainer>
        );
    }

    return <Component {...props} />;
};

export default withLoadingHandler;
