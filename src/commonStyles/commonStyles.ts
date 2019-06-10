import styled from '../styled-components';

export const FlexBox = styled.div`
    display: flex;
`;

export const VerticalFlexBox = styled(FlexBox)`
    flex-direction: column;
`;

export const VerticalFlexBoxWithMargin = styled(VerticalFlexBox)`
    &>* {
        margin-bottom: 1rem;
    }
`;
