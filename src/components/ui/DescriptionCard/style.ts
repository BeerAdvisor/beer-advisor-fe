import { FormLabel } from '@material-ui/core';

import styled from '../../../styled-components';
import { SMALL_BP_UP } from '../../../theme';
import { FavoriteButton } from '../../Icons/Favorite/Favorite';

export const DescriptionCardWrapper = styled.div`
    position: relative;
    padding: 2rem;
    box-shadow: ${props => props.theme.surfaces.shadow_1};
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.palette.light};
    ${SMALL_BP_UP} {
        max-width: 20rem;
        min-width: 19rem;
    }
    width: 100%;
    box-sizing: border-box;
`;

export const FavoriteButtonWrapper = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;
`;

export const DescriptionCardTopWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;

    &>*:not(:first-child) {
        margin-top: 1rem;
    }
`;

export const DescriptionNameValueWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
`;

export const DescriptionCardFormLabel = styled(FormLabel)`
    position: static;
`;

export const DescriptionCardBottomWrapper = styled(DescriptionCardTopWrapper)`
    justify-content: flex-start;
    margin-top: 1rem;
`;
