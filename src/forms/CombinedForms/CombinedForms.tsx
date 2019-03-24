import React, { useState, useCallback } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { MainForm, MainFormProps } from '../MainForm';
import { Switch } from '../../components';

import { SwitchWrapper } from './style';

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
        <React.Fragment>
            <SwitchWrapper>
                <Switch onChange={setForm} onText="Bar" offText="Beer" />
            </SwitchWrapper>
            <SwipeableViews
                axis={'x'}
                index={Number(isBarForm)}
                containerStyle={{width: '100%'}}
                style={{width: '100%'}}
            >
                <MainForm variant={variant} {...layoutProps} />
                <MainForm variant={variant} {...layoutProps} />
            </SwipeableViews>
        </React.Fragment>        
    );
};

export default CombinedForms;
