import { Favorite as MuiFavorite, FavoriteBorder as MuiFavoriteBorder } from '@material-ui/icons';

import styled, { css } from '../../../styled-components';
import { CenteredFlexBox } from '../../../commonStyles';

const favoriteStyles = css`
    color: #FF0000;
    cursor: pointer;
`;

export const FavoriteWrapper = styled(CenteredFlexBox)`
    width: 3rem;
    height: 3rem;
`;

export const Favorite = styled(MuiFavorite)`
    ${favoriteStyles}
`;

export const FavoriteBorder = styled(MuiFavoriteBorder)`
    ${favoriteStyles}
`;
