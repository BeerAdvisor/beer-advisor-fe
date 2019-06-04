import React, { ReactNode } from 'react';
import { isEmpty } from 'ramda';
import { IconButton, Typography } from '@material-ui/core';
import { PersonPin } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

import { useMobileDevice } from '../../../utils';

import { NavigationBarWrapper, NavList, NavElement, MidNavElement } from './style';

export interface NavigationBarProps {
    listItems?: ReactNode[];
    midItem?: number;
}

const NavigationBar: React.FunctionComponent<NavigationBarProps> = ({ listItems, midItem }) => ( 
    <NavigationBarWrapper>
        {!useMobileDevice() && listItems && !isEmpty(listItems) && (
            <NavList>
                {listItems.map((item: ReactNode, index: number) => (
                    index !== midItem 
                        ? <NavElement key={index}>{item}</NavElement>
                        : <MidNavElement key={index}>{item}</MidNavElement>)
                , listItems)}
            </NavList>
        )}
        {useMobileDevice() && (
            <>
            <IconButton style={{ padding: 0 }} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h5">Beer advisor</Typography>
            <PersonPin style={{ fontSize: 28 }}/>
            </>
        )}
    </NavigationBarWrapper>
);

export default NavigationBar;
