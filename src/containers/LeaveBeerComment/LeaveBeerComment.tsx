import React from 'react';
import gql from 'graphql-tag';

import { Mutation, GET_BAR_INFO } from '../../graphql';
import { CommentForm } from '../../forms/CommentForm';

export const COMMENT_BEER_MUTATION = gql`
    mutation CommentBeer($beerId: ID!, $comment: String!) {
        commentBeer(commentBeerInput: { beerId: $beerId, comment: $comment }) {
            id
        }
    }
`;

export interface CommentProps {
    id: string;
}

const LeaveBeerComment = ({ id }: CommentProps) => (
    <Mutation mutation={COMMENT_BEER_MUTATION} refetchQueries={[{ query: GET_BAR_INFO, variables: { beerId: id } }]}>
        {(mutation: any) => <CommentForm id={id} submitBeerComment={mutation} />}
    </Mutation>
);

export default LeaveBeerComment;
