import React from 'react';

import { LogoImage } from '../LogoImage';
import { Rating } from '../Rating';

export interface DescriptionCardProps {
    beerName: string;
}
export const DescriptionCard = ({beerName, ...other }: DescriptionCardProps) => {

    return (
            <React.Fragment>
                <LogoImage />
                <Rating filled={3.6} />
            </React.Fragment>
    );
};

export default DescriptionCard;
