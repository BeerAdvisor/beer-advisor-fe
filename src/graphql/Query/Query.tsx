import React from 'react';
import { Query, QueryProps } from 'react-apollo';

import { ErrorHandler } from '../ErrorHandler';

export default ({ children, ...rest }: QueryProps) => (
  <Query errorPolicy="all" {...rest}>
    {result => (
      // @ts-ignore
      <ErrorHandler error={result.error}>
        {children(result)}
      </ErrorHandler>
    )}
  </Query>
);
