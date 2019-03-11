import React, { ReactNode } from 'react';
import { isEmpty } from 'ramda';

import { NavigationBarWrapper, NavList, NavElement, MidNavElement } from './style';

export interface NavigationBarProps {
    listItems?: ReactNode[];
    midItem?: number;
}

const NavigationBar: React.FunctionComponent<NavigationBarProps> = ({ listItems, midItem }) => ( 
    <NavigationBarWrapper>
        {listItems && !isEmpty(listItems) && (
            <NavList>
                {listItems.map((item: ReactNode, index: number) => (
                    index !== midItem 
                        ? <NavElement key={index}>{item}</NavElement>
                        : <MidNavElement key={index}>{item}</MidNavElement>)
                , listItems)}
            </NavList>
        )}
    </NavigationBarWrapper>
);

export default NavigationBar;
