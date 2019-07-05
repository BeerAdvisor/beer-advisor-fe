import React, { useState, useCallback } from 'react';
import gql from 'graphql-tag';
import { MutationFn } from 'react-apollo';
import { FormLabel } from '@material-ui/core';

import { Rating, LittleButton } from '../../components';
import {
    RateBeerMutationVariables,
    RateBeerMutation_rateBeer,
} from '../../@types/__generated__/RateBeerMutation';
import { Mutation, GET_BEER_INFO } from '../../graphql';

import { RatingWrapper, LeaveRatingWrapper } from './style';

const RATE_BEER_MUTATION = gql`
    mutation RateBeerMutation($beerId: ID!, $rating: Int!) {
        rateBeer(rateBeerInput: { beerId: $beerId, rating: $rating }) {
            avgRating
        }
    }
`;

type LeaveRatingMutation = MutationFn<
    RateBeerMutation_rateBeer,
    RateBeerMutationVariables
>;

export interface LeaveRatingProps {
    id: string;
}
const LeaveRating = ({ id }: LeaveRatingProps) => {
    const [userBeerRating, setUserBeerRating] = useState(0);
    const [canLeaveRating, setCanLeaveRating] = useState(false);

    const handleLeaveRating = useCallback(
        (leaveRatingMutation: LeaveRatingMutation) => () => {
            if (userBeerRating) {
                setCanLeaveRating(c => !c);
                leaveRatingMutation({ variables: { beerId: id, rating: userBeerRating } });
            }
        },
        [id, userBeerRating]
    );

    return (
        <Mutation mutation={RATE_BEER_MUTATION} refetchQueries={[{ query: GET_BEER_INFO, variables: { beerId: id } }]}>
            {(mutation, { data: mutationResult }) => (
                <RatingWrapper>
                    <FormLabel style={{ position: 'static' }}>Your rating</FormLabel>
                    <LeaveRatingWrapper>
                        <Rating onClick={setUserBeerRating} filled={userBeerRating} disabled={canLeaveRating} />
                        <LittleButton
                            color="primary"
                            disabled={canLeaveRating || !userBeerRating}
                            onClick={handleLeaveRating(mutation)}
                        >
                            Confirm
                        </LittleButton>
                    </LeaveRatingWrapper>
                </RatingWrapper>
            )}
        </Mutation>
    );
};

export default LeaveRating;
