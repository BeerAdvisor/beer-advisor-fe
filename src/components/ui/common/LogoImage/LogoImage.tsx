import React from 'react';

import { StyledLogoImage } from './style';

export interface LogoImageProps {
    src?: string;
}
export const LogoImage = ({ src = 'http://alllogos.ru/images/logotip-velkopopovicky-kozel.jpg', ...other }: LogoImageProps) => {
    return <StyledLogoImage src={src} {...other} />;
};

export default LogoImage;
