import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

export const SmallButton = styled(MaterialButton)<any>`
    font-family: Raleway;
    border: 1px solid #006A5D;
    background-color: ${props => props.theme.palette.secondary.main};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
    border-radius: ${props => props.theme.borderRadius};
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: ${props => props.theme.palette.light};
    padding: 0;
    width: 100%;
    height: 48px;
`;

export default SmallButton;
    