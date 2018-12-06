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
    color: 'black',
   },
}));

interface FullWidthTabsProps {
    children: any;
}

function FullWidthTabs(props: FullWidthTabsProps) {
    const [activeValue, setActiveValue] = useState(0);
    const { root } = useStyles();

    const handleChange = (event: ChangeEvent<{}>, value: number) => {
        setActiveValue(value);
    };

    const handleChangeIndex = (index: number) => {
        setActiveValue(index);
    };

    const { children } = props;

    return (
        <TabsContainer>
            <AppBar position="static" classes={{root}}>
                <Tabs
                    value={activeValue}
                    onChange={handleChange}
                    indicatorColor="primary"
                    fullWidth={true}
                >
                    // TODO: extract this
                    <Tab label="Find a beer" />
                    <Tab label="Find a bar" />
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
