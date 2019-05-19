import styled from '../../../styled-components';

const SWITCH_WIDTH = 20;
const SWITCH_HEIGHT = 2.5;
const KNOB_SIZE = 12;

export interface StyledSwitchProps {
    checked?: boolean;
    disabled?: boolean;
};

export const SwitchWrapper = styled.div`
    display: inline-block;
    position: relative;
    border-radius: ${props => props.theme.borderRadius};
`;

export const NativeControl = styled.input.attrs({
    type: 'checkbox',
})`
    width: ${SWITCH_WIDTH}rem;
    height: ${SWITCH_HEIGHT}rem;
    cursor: pointer;
    position: absolute;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    box-sizing: border-box;
    opacity: 0;
    z-index: 2;
`;

export const SwitchBackground = styled.div<StyledSwitchProps>`
    display: flex;
    cursor: pointer;
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.palette.backgroundLight};
    height: ${SWITCH_HEIGHT}rem;
    outline: none;
    position: relative;
    width: ${SWITCH_WIDTH}rem;
    user-select: none;
    border: 4px solid #FFFFFF;

    &:before {
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: ${props => props.theme.borderRadius};
        content: '';
        background-color: ${props => props.theme.palette.backgroundLight};

        ${props => props.disabled && `
            opacity: 0.5;
        `}

        transition-duration: 90ms;
        transition-property: opacity, background-color;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    }
`;

export const SwitchKnob = styled.div<StyledSwitchProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: 0px 3px 10px rgba(0, 153, 153, 0.2);

    height: ${SWITCH_HEIGHT}rem;
    width: ${KNOB_SIZE}rem;

    position: absolute;

    transition-duration: 110ms;
    transition-property: transform;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);

    background-color: ${props => props.theme.palette.light};
    transform: translateX(0);

    z-index: 1;

    ${props => props.checked && `
        transform: translateX(${SWITCH_WIDTH - KNOB_SIZE}rem);
    `}
`;

export const SwitchOnText = styled.span<StyledSwitchProps>`
    font-family: Raleway;
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.theme.palette.primary.light};
    opacity: .99;
    align-self: center;
`;

export const SwitchOffText = styled(SwitchOnText)`
    
    margin: 0 ${props => props.checked ? `auto 0 ${KNOB_SIZE / 3}rem` : `${KNOB_SIZE / 3}rem 0 auto`};
    color: ${props => props.theme.palette.light};
`;
