import React from 'react';
import gql from 'graphql-tag';

import { Mutation } from '../../graphql';
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

export const Comment = ({ id }: CommentProps) => (
    <Mutation mutation={COMMENT_BEER_MUTATION}>
        {(mutation: any) => <CommentForm id={id} submitComment={mutation} />}
    </Mutation>
);
