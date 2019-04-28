import styled from '../../../styled-components';

export interface RatingWrapperProps {
    disabled?: boolean;
}
export const RatingWrapper = styled.div<RatingWrapperProps>`
    display: flex;
    align-items: center;
    ${props => !props.disabled && `
        cursor: pointer;
    `}
    font-size: 1.5rem;
`;

export const ValueContainer = styled.span`
    font-family: Montserrat;
    font-weight: bold;
    font-size: 1rem;
    margin-left: 0.5rem;
    color: ${props => props.theme.palette.primary.main};
`;