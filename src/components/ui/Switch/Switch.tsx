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
} from './style';

export interface SwitchProps {
    checked?: boolean;
    disabled?: boolean;
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
}) => {
    const [checked, setChecked] = useState(propsChecked);

    const handleToggle = useCallback(
        () => {
            if (!disabled) {
                let stateChecked;

                setChecked(c => {
                    stateChecked = !c;
                    return stateChecked;
                });

                if (onChange && stateChecked) {
                    onChange(stateChecked);
                }
            }
        },
        [disabled]
    );

    useEffect(
        () => {
            setChecked(propsChecked);
        },
        [propsChecked]
    );

    const nativeControlProps = {
        checked,
        onClick: handleToggle,
        readOnly: true,
    };

    const switchProps = { disabled, checked };

    const knob = (
        <React.Fragment>
            <SwitchKnob {...switchProps}>
                    <SwitchOnText>{checked ? onText.toUpperCase() : offText.toUpperCase()}</SwitchOnText>
            </SwitchKnob>
            <SwitchOffText checked={checked}>{checked ? offText.toUpperCase() : onText.toUpperCase()}</SwitchOffText>
        </React.Fragment>
    );

    return (
        <SwitchWrapper>
            <NativeControl {...nativeControlProps} />
            <SwitchBackground {...switchProps}>{knob}</SwitchBackground>
        </SwitchWrapper>
    );
};

export default Switch;
