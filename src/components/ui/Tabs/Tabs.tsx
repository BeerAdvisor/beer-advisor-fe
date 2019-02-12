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

const getTabWidth = (props: FullWidthTabsProps) => props.variant === 'small' ? '60px' : '120px';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        fontFamily: 'Staatliches',
        height: '562px',
        backgroundColor: 'inherit',
        width: 'auto',
        color: theme.palette.grey[500],
        boxShadow: 'none',
    },
    flexContainer: {
        flexDirection: 'column',
    },
    // TODO: Media queries for label
    // tabRootFirst: {
    //     opacity: 1,
    //     borderRadius: '40px',
    //     position: 'relative',
    //     zIndex: 1,
    //     backgroundColor: theme.palette.secondary.main,
    //     fontSize: '24px',
    //     minWidth: getTabWidth,
    //     width: getTabWidth,
    //     height: '312px',
    // },
    // tabRootSecond: {
    //     opacity: 1,
    //     borderRadius: '40px',
    //     position: 'relative',
    //     transform: 'translateY(-66px)',
    //     zIndex: 0,
    //     backgroundColor: theme.palette.secondary.main,
    //     fontSize: '24px',
    //     minWidth: getTabWidth,
    //     width: getTabWidth,
    //     height: '310px',
    // },
    wrapper: {
        transform: 'rotate(-90deg)',
        width: 'auto',
    },
    selectedFirst: {
        zIndex: 1,
        textDecoration: 'underline',
        color:  theme.palette.primary.main,
        boxShadow: '6.4px 7.7px 24px 0 rgba(0, 0, 0, 0.14)',
    },
    selectedSecond: {
        zIndex: 1,
        textDecoration: 'underline',
        color:  theme.palette.primary.main,
        boxShadow: '6.4px -7.7px 24px 0 rgba(0, 0, 0, 0.14)',
    },
    indicator: {
        visibility: 'hidden',
    },
}));

interface FullWidthTabsProps {
    children: any;
    variant?: 'small';
}

function FullWidthTabs(props: FullWidthTabsProps) {
    const [activeValue, setActiveValue] = useState(0);
    // tabRootFirst, tabRootSecond,
    const { root, selectedFirst, selectedSecond, wrapper, flexContainer, indicator } = useStyles(props);

    const handleChange = (event: ChangeEvent<{}>, value: number) => {
        setActiveValue(value);
    };

    const handleChangeIndex = (index: number) => {
        setActiveValue(index);
    };

    const { children, ...other } = props;

    return (
        <TabsContainer {...other}>
                <AppBar position="static" classes={{ root }}>
                    <Tabs
                        value={activeValue}
                        onChange={handleChange}
                        classes={{ flexContainer, indicator }}
                        scrollable={false}
                    >
                        // TODO: extract this
                        <Tab
                            classes={{ wrapper, selected: selectedFirst }}
                            label="BEER"
                            {...other}
                        />
                        <Tab
                            classes={{ wrapper, selected: selectedSecond }}
                            label="BAR"
                            {...other}
                        />
                    </Tabs>
                </AppBar>
            <SwipeableViews
                axis={'x'}
                index={activeValue}
                onChangeIndex={handleChangeIndex}
                containerStyle={{width: '100%'}}
                style={{width: '100%'}}
            >
                {children}
            </SwipeableViews>
        </TabsContainer>
    );
}

export default FullWidthTabs;
