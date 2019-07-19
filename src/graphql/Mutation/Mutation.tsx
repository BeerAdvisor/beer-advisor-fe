import React from 'react';
import { Mutation, MutationProps } from 'react-apollo';

import { ErrorHandler } from '../ErrorHandler';

export default ({children, ...other}: MutationProps) => (
  <Mutation {...other}>
    {(mutation: any, result: any) => (
    // @ts-ignore
      <ErrorHandler error={result.error}>
        {children(mutation, result)}
      </ErrorHandler>
    )}
  </Mutation>
);
