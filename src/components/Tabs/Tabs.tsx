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
        color: theme.palette.primary.main,
        boxShadow: 'none',
    },
    flexContainer: {
        flexDirection: 'column',
    },
    // TODO: Media queries for label
    tabRootFirst: {
        borderRadius: '40px',
        position: 'relative',
        zIndex: 1,
        backgroundColor: theme.palette.secondary.main,
        fontSize: '24px',
        minWidth: '120px',
        minHeight: '400px',
    },
    tabRootSecond: {
        borderRadius: '40px',
        position: 'relative',
        transform: 'translateY(-80px)',
        zIndex: 0,
        backgroundColor: theme.palette.secondary.main,
        fontSize: '24px',
        minWidth: '120px',
        minHeight: '400px',
    },
    wrapper: {
        transform: 'rotate(-90deg)',
    },
    selectedFirst: {
        zIndex: 1,
        textDecoration: 'underline',
        boxShadow: '10px 0 26px 0 rgba(0, 0, 0, 0.09)',
    },
    selectedSecond: {
        textDecoration: 'underline',
        boxShadow: '10px 0 26px 0 rgba(0, 0, 0, 0.09)',
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
    const { root, selectedFirst, selectedSecond, wrapper, flexContainer, tabRootFirst, tabRootSecond, indicator } = useStyles();

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
                            classes={{ root: tabRootFirst, wrapper, selected: selectedFirst }}
                            label="BEER"
                        />
                        <Tab
                            classes={{ root: tabRootSecond, wrapper, selected: selectedSecond }}
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
