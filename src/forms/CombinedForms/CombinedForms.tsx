import React, { useState } from 'react';

import { MainForm, MainFormProps } from '../MainForm';
import { Switch } from '../../components';

import { SwitchWrapper, StyledSwipeableViews, CombinedFormsContainer } from './style';

export type CombinedFormsProps = MainFormProps;

export const CombinedForms = (props: CombinedFormsProps) => {
    const [isBarForm, setForm] = useState(false);
    const { variant } = props;

    const layoutProps = {
        ...props,
        searchFieldPlaceholder: 'Find a beer', // TODO: constants, export to separate logic components
        searchFieldLabel: 'Name',
        selectLabel: 'Type',
        sliderMaxValue: 100,
        sliderMinValue: 0,
        sliderStep: 1,
    };

    return (
        <CombinedFormsContainer variant={variant}>
            <SwitchWrapper>
                <Switch onChange={setForm} onText="Bar" offText="Beer" />
            </SwitchWrapper>
            <StyledSwipeableViews
                axis={'x'}
                index={Number(isBarForm)}
                containerStyle={{width: '100%'}}
            >
                <MainForm variant={variant} {...layoutProps} />
                <MainForm variant={variant} {...layoutProps} />
            </StyledSwipeableViews>
        </CombinedFormsContainer>        
    );
};

export default CombinedForms;
