import React, { ChangeEvent, useState, useCallback, useLayoutEffect, useRef } from 'react';
// @ts-ignore
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs, { TabsProps } from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabProps } from 'material-ui';
import { memoizeWith, identity } from 'ramda';

import styled from '../../../styled-components';

import { TabsContainer } from './style';

const getTabWidth = (props: any) => props.variant === 'small' ? '60px' : '120px';

const AppBarStyled = styled(AppBar)<any>`
    font-family: Staatliches;
    height: 562px;
    background-color: inherit;
    width: auto;
    color: ${props => props.theme.palette.grey[500]};
    box-shadow: none;
`;

const TabStyled = styled(({ icon, ...other}: TabProps) => (
    <Tab classes={{ wrapper: 'wrapper', selected: 'selected' }} {...other} />
))`
    opacity: 1;
    border-radius: ${props => props.theme.borderRadius};
    position: relative;
    z-index: 1;
    background-color: ${props => props.theme.palette.secondary.main};
    font-size: 24px;
    min-width: ${props => getTabWidth(props)};
    width: ${props => getTabWidth(props)};
    height: 312px;

    &:last-child {
        transform: translateY(-66px);
        z-index: 0;
        height: 310px;
    }

    & .wrapper {
        transform: rotate(-90deg);
        width: auto;
    }
`;

// Selected is in Tabs and is being passed down to Tab, some weird shit is going here, but whatever...
const TabsStyled = styled((props: TabsProps) => (
    <Tabs classes={{ flexContainer: 'flex-container' }}{...props} />
))`
    & .flex-container {
        flex-direction: column;
    }

    & .selected {
        z-index: 1;
        text-decoration: underline;
        color: ${props => props.theme.palette.primary.main};
        box-shadow: 6.4px 7.7px 24px 0 rgba(0, 0, 0, 0.14);

        &:last-child {
            box-shadow:  6.4px -7.7px 24px 0 rgba(0, 0, 0, 0.14);
        }
    }
`;

interface FullWidthTabsProps {
    children: React.ReactNode[];
    variant?: 'small';
}

function FullWidthTabs(props: FullWidthTabsProps) {
    const [activeValue, setActiveValue] = useState(0);

    const handleChange = useCallback((event: ChangeEvent<{}>, value: number) => {
        setActiveValue(value);
    }, []);

    const { children, ...other } = props;

    return (
        <TabsContainer {...other}>
                <AppBarStyled position="static">
                    <TabsStyled
                        value={activeValue}
                        onChange={handleChange}
                    >
                        // TODO: extract this
                        <TabStyled
                            label="BEER"
                            {...other}
                        />
                        <TabStyled
                            label="BAR"
                            {...other}
                        />
                    </TabsStyled>
                </AppBarStyled>
            <SwipeableViews
                axis={'x'}
                index={activeValue}
                onChangeIndex={setActiveValue}
                containerStyle={{width: '100%'}}
                style={{width: '100%'}}
            >
                {children}
            </SwipeableViews>
        </TabsContainer>
    );
}

export default FullWidthTabs;
