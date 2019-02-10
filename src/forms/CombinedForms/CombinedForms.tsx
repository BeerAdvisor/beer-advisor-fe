import React from 'react';
import { MainForm } from '../MainForm';
import { Tabs } from '../../components';

export const CombinedForms = (props:any) => {
    const layoutProps = {
        ...props,
        searchFieldPlaceholder: 'Find a beer', // TODO: constants, export to separate logic components
        searchFieldLabel: 'Beer name',
        selectLabel: 'Beer type',
        sliderMaxValue: 100,
        sliderMinValue: 0,
        sliderStep: 1,
    };

    return (
        <Tabs>
            <MainForm {...layoutProps} />
            <MainForm {...layoutProps} />
        </Tabs>
    );
};

export default CombinedForms;
