import styled, { css } from '../styled-components';

export const FlexBox = styled.div`
    display: flex;
`;

export const CenteredFlexBox = styled(FlexBox)`
    justify-content: center;
`;

export const VerticalFlexBox = styled(FlexBox)`
    flex-direction: column;
`;

export const VerticalFlexBoxWithMargin = styled(VerticalFlexBox)`
    &>* {
        margin-bottom: 1rem;
    }
`;

export const Card = css`
    background-color: ${props => props.theme.palette.light};
    border-radius: ${props => props.theme.borderRadius};
    box-sizing: border-box; 
    box-shadow: ${props => props.theme.surfaces.shadow_1};
`;
