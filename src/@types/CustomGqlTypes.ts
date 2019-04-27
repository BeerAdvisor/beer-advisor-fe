import { QueryResult } from 'react-apollo';
import { OperationVariables } from 'apollo-boost';

export interface GuaranteedQueryResult<TData = any, TVariables = OperationVariables> extends QueryResult<TData, TVariables> {
    data: TData;
}
