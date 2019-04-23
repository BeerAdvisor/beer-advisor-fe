import React from 'react';
import { Query, QueryProps } from 'react-apollo';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import { CircularProgress as MuiCircularProgress } from '@material-ui/core';

import { CircularProgressContainerElement } from '../withLoadingHandler';

export type CustomizedQueryProps = {
    Loader?: React.ComponentType<CircularProgressProps>;
    CircularProgressContainer?: React.ComponentType<any>;
    loaderSize?: number;
} & QueryProps;

export default ({
    children,
    Loader = MuiCircularProgress,
    CircularProgressContainer = CircularProgressContainerElement,
    loaderSize = 100,
    ...rest
}: CustomizedQueryProps) => (
    <Query errorPolicy="all" {...rest}>
        {result => {
            if (result.loading) {
                return (
                    <CircularProgressContainer>
                        <Loader size={loaderSize} />
                    </CircularProgressContainer>
                );
            }
            if (result.error) return `Error! ${result.error}`;

            return children(result);
        }}
    </Query>
);

// import { ErrorHandler } from '../ErrorHandler';

{
    /* {result => (
      // @ts-ignore
      <ErrorHandler error={result.error}>
        {children(result)}
      </ErrorHandler>
    )} */
}
