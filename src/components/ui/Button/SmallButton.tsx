import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

export const SmallButton = styled(MaterialButton)<any>`
    font-family: Raleway;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
    border-radius: ${props => props.theme.borderRadius};
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1.2px;
    padding: 0;
    width: 100%;
    height: 48px;
    color: ${props => props.theme.palette.light};
    border: 1px solid ${props => props.theme.palette.primary.main};
    background-color: ${props => props.theme.palette.primary.main};

    ${props => props.variant === 'outlined' && `
        background-color: transparent;
        font-size: 1rem;
        text-transform: none;
        border: 1px solid ${props.theme.palette.primary.main};
        color: ${props.theme.palette.primary.main};
    `}

    ${props => props.color === 'secondary' && `
        border: 1px solid ${props.theme.palette.secondary.main};
        color: ${props.theme.palette.secondary.main};
    `}

    ${props => props.color === 'secondary' && props.variant === 'contained' && `
        color: ${props.theme.palette.light};
        background-color: ${props.theme.palette.secondary.main};
    `}
`;

export default SmallButton;
    