import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

const LittleButton = styled(MaterialButton)<any>`
    font-family: Raleway;
    background-color: ${props => props.theme.palette.secondary.main};
    box-shadow: 1px 0 13.6px 2.4px rgba(0, 0, 0, 0.4);
    border-radius: ${props => props.theme.borderRadius};
    font-size: 48px;
    letter-spacing: 1.2px;
    color: ${props => props.theme.palette.light};
    padding: 0;
`;

export default LittleButton;
