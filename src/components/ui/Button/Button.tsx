import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

const Button = styled(MaterialButton)<any>`
    font-family: Staatliches;
    background-color: #00b35c;
    box-shadow: 1px 0 13.6px 2.4px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    font-size: 48px;
    letter-spacing: 1.2px;
    color: #FFF;
    padding: 0;
`;

export default Button;
    