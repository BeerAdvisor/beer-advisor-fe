import React from 'react';

export interface AddToFavouriteButtonProps {
    favouriteId: string;
    isBeer: boolean;
}
export const AddToFavouriteButton = ({ favouriteId, isBeer, ...other }: AddToFavouriteButtonProps) => {

};

export default AddToFavouriteButton;
