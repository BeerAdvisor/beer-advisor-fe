import styled from '../styled-components';

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
