import React from 'react';
import { HorizontalImage, HorizontalImageContainer } from './style';
import { Typography } from '@material-ui/core';

interface HorizontalImageProps {
    src: string;
    description: string;
}

export default ({src, description}: HorizontalImageProps) => { 
 
    return (<HorizontalImageContainer>
                {description &&
                    <Typography variant="subtitle2">{description}</Typography>
                }
                <HorizontalImage src={src} />
            </HorizontalImageContainer>);
};
