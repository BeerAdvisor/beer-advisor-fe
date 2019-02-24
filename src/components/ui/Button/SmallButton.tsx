import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

export const SmallerButton = styled(MaterialButton)<any>`
    font-family: Staatliches;
    background-color: #00b35c;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
    border-radius: 35px;
    font-size: 30px;
    letter-spacing: 1.2px;
    color: #FFF;
    padding: 0;
    width: 280px;
    height: 48px;
    margin-top: 20px;
`;

export default SmallerButton;
    