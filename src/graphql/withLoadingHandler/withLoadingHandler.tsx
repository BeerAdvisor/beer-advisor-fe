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

export interface WithLoadingHocFactory<T> {
    Loader?: React.ComponentType<CircularProgressProps>;
    CircularProgressContainer?: React.ComponentType<any>;
    Component: React.ComponentType<T>;
}

const withLoadingHandler = <T extends any>({
    Component,
    Loader = MuiCircularProgress,
    CircularProgressContainer = CircularProgressContainerElement,
}: WithLoadingHocFactory<T>) => ({ data, ...other }: any) => {
    // TODO: Make data generic
    if (data.loading) {
        return (
            <CircularProgressContainer>
                <Loader size={100} />
            </CircularProgressContainer>
        );
    }

    return <Component data={data} {...other} />;
};

export default withLoadingHandler;
