import { ReactNode } from 'react';
import { ApolloError } from 'apollo-boost';
import { head } from 'ramda';
import { MutationFn, OperationVariables, MutationResult } from 'react-apollo';

import { GraphQlError, ServerError } from '../../api';

export type GraphqlChildrenType = ReactNode | ((mutateFn: MutationFn<any, OperationVariables>, result: MutationResult<any>) => ReactNode);

export interface ErrorHandlerProps {
    error?: ApolloError;
    children?: GraphqlChildrenType;
}

const ErrorHandler = ({ error, children }: ErrorHandlerProps) => {
    if (error) {
        const { graphQLErrors, networkError } = error;

        if (graphQLErrors) {
            const graphqlError = head(graphQLErrors);
            throw new GraphQlError(graphqlError);
          }
      
        if (networkError) {
            throw new ServerError(networkError);
        }
    }

    return children;
  };
  
  export default ErrorHandler;
  