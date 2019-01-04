import React, { ChangeEvent, useState } from 'react';
import { Theme } from '@material-ui/core/styles';
// @ts-ignore
import SwipeableViews from 'react-swipeable-views';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabsContainer } from './style';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: 'inherit',
        width: 'auto',
        color: 'black',
        boxShadow: 'none',
    },
    flexContainer: {
        flexDirection: 'column',
    },
    // TODO: Media queries for label
    tabRoot: {
        minWidth: '120px',
        minHeight: '360px',
    },
    wrapper: {
        transform: 'rotate(-90deg)',
    },
    selectedFirst: {
        boxShadow: '-5px -1.5px 5px rgba(0, 0, 0, 0.09) inset',
    },
    selectedSecond: {
        boxShadow: '5px -1.5px 5px rgba(0, 0, 0, 0.09) inset',
    },
    indicator: {
        visibility: 'hidden',
    },
}));

interface FullWidthTabsProps {
    children: any;
}

function FullWidthTabs(props: FullWidthTabsProps) {
    const [activeValue, setActiveValue] = useState(0);
    const { root, selectedFirst, selectedSecond, wrapper, flexContainer, tabRoot, indicator } = useStyles();

    const handleChange = (event: ChangeEvent<{}>, value: number) => {
        setActiveValue(value);
    };

    const handleChangeIndex = (index: number) => {
        setActiveValue(index);
    };

    const { children } = props;

    return (
        <TabsContainer>
                <AppBar position="static" classes={{ root }}>
                    <Tabs
                        value={activeValue}
                        onChange={handleChange}
                        classes={{ flexContainer, indicator }}
                        scrollable={false}
                    >
                        // TODO: extract this
                        <Tab
                            classes={{ root: tabRoot, wrapper, selected: selectedFirst }}
                            label="BEER"
                        />
                        <Tab
                            classes={{ root: tabRoot, wrapper, selected: selectedSecond }}
                            label="BAR"
                        />
                    </Tabs>
                </AppBar>
            <SwipeableViews
                axis={'x'}
                index={activeValue}
                onChangeIndex={handleChangeIndex}
            >
                {children}
            </SwipeableViews>
        </TabsContainer>
    );
}

export default FullWidthTabs;
