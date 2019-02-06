import React from 'react';
import { InfoTextContainer, VerticalTextContainer, PurposeLayoutContainer, ImageContainer } from './style';
import { ExtraLargeText, LargeText } from '../../../../components';
import HorizontalImage from '../../../../components/ui/Image/HorizontalImage';
import { MAIN_PAGE_HORIZONTAL_IMAGE_DESCRIPTION } from '../../../../texts/constants';

export default () => (
    <PurposeLayoutContainer>
        <InfoTextContainer>
            <ExtraLargeText>W</ExtraLargeText>
            <VerticalTextContainer>
                <LargeText>HAT</LargeText>
                <LargeText dark>DO</LargeText>
                <LargeText dark>WE DO</LargeText>
            </VerticalTextContainer>
            <ExtraLargeText style={{ position: 'relative', left: '-40px' }}>?</ExtraLargeText>
        </InfoTextContainer>
        <ImageContainer>
            <HorizontalImage
                src="https://cdn.finfeed.com/images/CPH_baltic_beer.2e16d0ba.fill-510x286.jpg"
                description={MAIN_PAGE_HORIZONTAL_IMAGE_DESCRIPTION}
             />
        </ImageContainer>
    </PurposeLayoutContainer>
);
