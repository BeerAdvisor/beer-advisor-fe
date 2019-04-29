import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

const LittleButton = styled(MaterialButton)<any>`
    font-family: Raleway;
    height: 2rem;
    background-color: ${props => props.theme.palette.primary.main};
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.06);
    border-radius: ${props => props.theme.borderRadius};
    font-size: 1rem;
    font-weight: bold;
    text-transform: none;
    color: ${props => props.theme.palette.light};
    padding: 0 1.5rem;
`;

export default LittleButton;
