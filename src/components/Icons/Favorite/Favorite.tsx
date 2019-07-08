import React, { useState } from 'react';

import { Favorite, FavoriteBorder, FavoriteWrapper } from './style';

export interface FavoriteProps {
    isFavorite?: boolean;
    onClick?: (e: React.MouseEvent) => void;
}
export const FavoriteButton = ({ isFavorite: isFavoriteProps, onClick }: FavoriteProps) => {
    const [isFavorite, setFavorite] = useState(!!isFavoriteProps);
    const [isHovered, setHovered] = useState(false);
    
    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            onClick(e);
        }

        setFavorite(f => !f);
    };

    const handleHover = (e: any) => setHovered(true);
    const handleBlur = (e: any) => setHovered(false);

    return (
    <FavoriteWrapper  onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleBlur}>
        {(isFavorite || isHovered)
        ? <Favorite />
        : <FavoriteBorder />
        }
    </FavoriteWrapper>
    );
};

export default FavoriteButton;
