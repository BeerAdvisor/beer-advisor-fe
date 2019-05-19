import React from 'react';
import styled from 'styled-components';
import MaterialToogleButton, { ToggleButtonProps as MuiToggleButtonProps } from '@material-ui/lab/ToggleButton';

interface ToggleButtonProps extends MuiToggleButtonProps {
    small?: boolean;
}
const ToggleButton = styled(({ small, ...other }: ToggleButtonProps) => (
    <MaterialToogleButton classes={{ label: 'label', selected: 'selected' }} {...other} />
))`
    border-radius: 30px !important; 
    min-width: 8.3rem;
    flex-grow: 1;
    height: 2.8rem;
    box-shadow: 3px 0 10px 0 rgba(0, 0, 0, 0.11);
    font-size: 1rem;
    margin: 0 10px;
    ${props => props.small && `
        width: 6rem;
        height: 2rem;
        font-size: .8rem;
    `}
`;

export default ToggleButton;