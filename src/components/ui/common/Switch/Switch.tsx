import React, {
    useCallback,
    useState,
    useEffect,
    FunctionComponent,
} from 'react';

import {
    SwitchWrapper,
    NativeControl,
    SwitchBackground,
    SwitchKnob,
    SwitchOnText,
    SwitchOffText,
    StyledSwitchProps,
} from './style';

export interface SwitchProps extends StyledSwitchProps {
    onChange?: (checked: boolean) => void;
    onText: string;
    offText: string;
}

export const Switch: FunctionComponent<SwitchProps> = ({
    checked: propsChecked = false,
    disabled = false,
    onChange,
    onText,
    offText,
    variant,
}) => {
    const [checked, setChecked] = useState(propsChecked);

    const handleToggle = useCallback(() => {
        if (!disabled) {
            setChecked(c => {
                if (onChange) {
                    onChange(!c);
                }
                return !c;
            });
        }
    }, [disabled]);

    useEffect(() => {
        setChecked(propsChecked);
    }, [propsChecked]);

    const nativeControlProps = {
        checked,
        variant,
        onClick: handleToggle,
        readOnly: true,
    };

    const switchProps = { disabled, checked, variant };

    const knob = (
        <React.Fragment>
            <SwitchKnob {...switchProps}>
                    <SwitchOnText>{checked ? onText.toUpperCase() : offText.toUpperCase()}</SwitchOnText>
            </SwitchKnob>
            <SwitchOffText variant={variant} checked={checked}>{checked ? offText.toUpperCase() : onText.toUpperCase()}</SwitchOffText>
        </React.Fragment>
    );

    return (
        <SwitchWrapper>
            <NativeControl {...nativeControlProps} />
            <SwitchBackground variant={variant} {...switchProps}>{knob}</SwitchBackground>
        </SwitchWrapper>
    );
};

export default Switch;
