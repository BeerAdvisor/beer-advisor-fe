import React, { useState, useCallback } from 'react';
import gql from 'graphql-tag';
import { MutationFn } from 'react-apollo';
import { FormLabel } from '@material-ui/core';

import { Rating, LittleButton } from '../../components';
import {
    RateBeerMutationVariables,
    RateBeerMutation_rateBeer,
} from '../../@types/__generated__/RateBeerMutation';
import {
    RateBarMutation_rateBar,
    RateBarMutationVariables,
} from '../../@types/__generated__/RateBarMutation';
import { Mutation, GET_BAR_INFO, GET_BEER_INFO } from '../../graphql';

import { RatingWrapper, LeaveRatingWrapper } from './style';

const RATE_BEER_MUTATION = gql`
    mutation RateBeerMutation($beerId: ID!, $rating: Int!) {
        rateBeer(rateBeerInput: { beerId: $beerId, rating: $rating }) {
            avgRating
        }
    }
`;

const RATE_BAR_MUTATION = gql`
    mutation RateBarMutation($barId: ID!, $rating: Int!) {
        rateBar(rateBarInput: { barId: $barId, rating: $rating }) {
            id
        }
    }
`;

type LeaveBeerRatingMutation = MutationFn<
    RateBeerMutation_rateBeer,
    RateBeerMutationVariables
>;
type LeaveBarRatingMutation = MutationFn<
    RateBarMutation_rateBar,
    RateBarMutationVariables
>;
interface LeaveRatingHandler {
    leaveBeerRatingMutation?: LeaveBeerRatingMutation;
    leaveBarRatingMutation?: LeaveBarRatingMutation;
}

export interface LeaveRatingProps {
    id: string;
    isBeer?: boolean;
}
const LeaveRating = ({ id, isBeer }: LeaveRatingProps) => {
    const [userRating, setUserRating] = useState(0);
    const [canLeaveRating, setCanLeaveRating] = useState(false);

    const handleLeaveRating = useCallback(
        ({
            leaveBarRatingMutation,
            leaveBeerRatingMutation,
        }: LeaveRatingHandler) => () => {
            if (userRating) {
                setCanLeaveRating(c => !c);

                if (leaveBeerRatingMutation) {
                    leaveBeerRatingMutation({
                        variables: { beerId: id, rating: userRating },
                    });
                }

                if (leaveBarRatingMutation) {
                    leaveBarRatingMutation({
                        variables: { barId: id, rating: userRating },
                    });
                }
            }
        },
        [id, userRating, isBeer]
    );

    const leaveRatingMutation = isBeer
        ? {
              mutation: RATE_BEER_MUTATION,
              refetchQueries: [
                  { query: GET_BEER_INFO, variables: { beerId: id } },
              ],
          }
        : {
              mutation: RATE_BAR_MUTATION,
              refetchQueries: [
                  { query: GET_BAR_INFO, variables: { barId: id } },
              ],
          };

    return (
        <Mutation {...leaveRatingMutation}>
            {mutation => (
                <RatingWrapper>
                    <FormLabel style={{ position: 'static' }}>
                        Your rating
                    </FormLabel>
                    <LeaveRatingWrapper>
                        <Rating
                            onClick={setUserRating}
                            filled={userRating}
                            disabled={canLeaveRating}
                        />
                        <LittleButton
                            color="primary"
                            disabled={canLeaveRating || !userRating}
                            onClick={handleLeaveRating(
                                isBeer
                                    ? { leaveBeerRatingMutation: mutation }
                                    : { leaveBarRatingMutation: mutation }
                            )}
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
