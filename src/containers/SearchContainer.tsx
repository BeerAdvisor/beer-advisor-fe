import React from 'react';
import { Tabs } from '../components/ui';
import { MainForm } from '../forms';

const SearchContainer = () => {

    const layoutProps = {
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

export default SearchContainer;
