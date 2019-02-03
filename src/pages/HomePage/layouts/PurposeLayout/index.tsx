import React from 'react';
import { InfoTextContainer, VerticalTextContainer, ImageContainer, PurposeLayoutContainer } from './style';
import { ExtraLargeText, LargeText } from '../../../../components';
import HorizontalImage from '../../../../components/ui/Image/HorizontalImage';

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
                <HorizontalImage src="https://cdn.finfeed.com/images/CPH_baltic_beer.2e16d0ba.fill-510x286.jpg" description="We help people to find beer which matches exactly their requirements. You will be the best one we are going to help!"/>
        </ImageContainer>
    </PurposeLayoutContainer>
);
