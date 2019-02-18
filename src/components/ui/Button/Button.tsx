import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';
import { SMALL_BP_UP, MEDIUM_BP_UP, LARGE_BP_UP } from '../../../theme';

const Button = styled(MaterialButton)<any>`
    font-family: Staatliches;
    background-color: #00b35c;
    box-shadow: 1px 0 13.6px 2.4px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    font-size: 48px;
    letter-spacing: 1.2px;
    color: #FFF;
    padding: 0;

    ${SMALL_BP_UP} {
        fontSize: 14px;
        width: 160px;
    }
    ${MEDIUM_BP_UP}: {
        width: 250px;
    }
    ${LARGE_BP_UP} {
        width: 350px;
        height: 75px;
    }
`;

export default Button;
    