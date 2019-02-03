import styled from 'styled-components';

export const ExtraLargeText = styled.p`
    font-family: Staatliches;
    margin: 0;
    font-size: 455px;
    line-height: 338px;
    overflow: hidden;
    letter-spacing: 4.5px;
    color: ${props => props.theme.palette.primary.lightContrast}
`;

interface LargeTextProps {
    dark?: boolean;
}
export const LargeText = styled.p<LargeTextProps>`
    font-family: Staatliches;
    margin: 0;
    font-size: 128px;
    line-height: 0.88;
    letter-spacing: -1.3px;
    color: ${props => props.dark ? props.theme.palette.primary.darkContrast : props.theme.palette.primary.lightContrast}
`;

export const ExtraLargeFirstLetter = styled(LargeText)`
    &:first-letter {
        font-size: 447px;
        line-height: 1.23;
        line-height: 311px;
        color: ${props => props.theme.palette.primary.lightContrast}
    }
`;