import React from 'react';

import { LogoImage } from '../LogoImage';

export interface DescriptionCardProps {
    beerName: string;
}
export const DescriptionCard = ({beerName, ...other }: DescriptionCardProps) => {

    return <LogoImage />;
};

export default DescriptionCard;
