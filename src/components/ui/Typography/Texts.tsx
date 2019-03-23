import styled from 'styled-components';

import { EXTRA_LARGE_BP_DOWN, LARGE_BP_DOWN } from '../../../theme';

export const ExtraLargeText = styled.span`
    font-family: Raleway;
    margin: 0;
    ${EXTRA_LARGE_BP_DOWN} {
        font-size: 455px;
        line-height: 338px;
    }
    ${LARGE_BP_DOWN} {
        font-size: 400px;
        line-height: 300px;
    }
    letter-spacing: 4.5px;
    color: ${props => props.theme.palette.light}
`;

interface LargeTextProps {
    dark?: boolean;
}
export const LargeText = styled.span<LargeTextProps>`
    font-family: Raleway;
    margin: 0;
    ${EXTRA_LARGE_BP_DOWN} {
        font-size: 128px;
        line-height: .88;
    }
    ${LARGE_BP_DOWN} {
        font-size: 118px;
        line-height: .8;
    }
    letter-spacing: -1.3px;
    color: ${props => props.dark ? props.theme.palette.dark : props.theme.palette.light}
`;

export const ExtraLargeFirstLetter = styled(LargeText)`
    &:first-letter {
        font-size: 447px;
        line-height: 1.23;
        line-height: 311px;
        color: ${props => props.theme.palette.light}
    }
`;
