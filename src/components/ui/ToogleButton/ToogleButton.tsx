import React from 'react';
import styled from 'styled-components';
import MaterialToogleButton, { ToggleButtonProps } from '@material-ui/lab/ToggleButton';

const ToggleButton = styled((props: ToggleButtonProps) => (
    <MaterialToogleButton classes={{ disabled: 'disabled', selected: 'selected' }} {...props} />
))`
    border-radius: 25px !important; 
    min-width: 150px;
    flex-grow: 1;
    height: 50px;
    box-shadow: 3px 0 10px 0 rgba(0, 0, 0, 0.11);
    font-size: 18px;
    &:not(:first-child) {
        margin-left: 10px;
    }
    &:not(:last-child) {
        margin-right: 10px;
    }

    & .disabled {
        color:  ${props => props.theme.palette.grey[400]};
    }
`;

export default ToggleButton;