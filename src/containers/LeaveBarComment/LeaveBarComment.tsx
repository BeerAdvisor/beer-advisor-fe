import React from 'react';
import gql from 'graphql-tag';

import { Mutation, GET_BAR_INFO } from '../../graphql';
import { CommentForm } from '../../forms/CommentForm';

export const COMMENT_BAR_MUTATION = gql`
    mutation CommentBar($barId: ID!, $comment: String!) {
        commentBar(commentBarInput: { barId: $barId, comment: $comment }) {
            id
        }
    }
`;

export interface CommentProps {
    id: string;
}

const LeaveBarComment = ({ id }: CommentProps) => (
    <Mutation mutation={COMMENT_BAR_MUTATION} refetchQueries={[{ query: GET_BAR_INFO, variables: { barId: id } }]}>
        {(mutation: any) => <CommentForm id={id} submitBarComment={mutation} />}
    </Mutation>
);

export default LeaveBarComment;
