import React from 'react';
import { MenuItem } from '@material-ui/core';
import { Tabs } from '../components';
import { MainForm } from '../Forms';

const SearchContainer = () => {
    // TODO: fetch this from server
    const menuItems = [1, 2, 3, 4];

    const layoutProps = {
        searchFieldPlaceholder: 'Find a beer', // TODO: constants
        selectLabel: 'Beer type',
        selectMenuItems: menuItems.map(item => (
            <MenuItem value={item}>{item}</MenuItem>
        )),
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
