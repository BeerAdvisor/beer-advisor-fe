import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';

export const RevertedText = styled(Typography as React.FunctionComponent<TypographyProps>)`
    display: inline-block;
    white-space: nowrap;
    transform: translate(-40%,145%) rotate(-90deg);
    &:after {
        content: none;
        float: left;
        marginTop: 100%;
    }
`;
