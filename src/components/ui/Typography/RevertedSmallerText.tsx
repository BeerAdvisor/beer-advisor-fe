import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';

export const RevertedSmallerText = styled(Typography as React.FunctionComponent<TypographyProps>)`
    display: inline-block;
    white-space: nowrap;
    transform: translate(-36%,235%) rotate(-90deg);
    &:after {
        content: none;
        float: left;
        margin-top: 100%;
    }
`;

export default RevertedSmallerText;
