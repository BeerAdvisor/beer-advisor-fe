import React, { ReactNode, useState, useCallback } from 'react';
import { Typography, TableHead, Table, TableBody } from '@material-ui/core';
import { sortBy, compose, prop } from 'ramda';

import { KeyboardArrowDown, KeyboardArrowUp } from '../../../Icons';
import { ListItem } from '../../common/ListItem';
import { FloatingButton } from '../../common/FloatingButton';
import { mapIndexed, useMobileDevice } from '../../../../utils';
import { ExpandedCardTableHead } from '../ExpandedCardTableHead';
import { UnitedLavelValue } from '../../../../@types';
import ExpandedCardTableRow from '../ExpandedCardTableCell/ExpandedCardTableRow';

import {
    ExpandedInfoCardWrapper,
    ListItemsContainer,
    ButtonContainer,
    ExpandedToggleButtonGroup,
} from './style';

export interface ExpandedInfoCardProps {
    listName: ReactNode;
    expandedListItems?: ExpandedListItem[];
    maxItemsToShow?: number;
    sortings: string[];
}

export interface ExpandedListItem {
    name: string;
    id: number | string;
    labelValues: UnitedLavelValue;
}

export default ({
    maxItemsToShow = 3,
    listName,
    expandedListItems,
    sortings,
    ...other
}: ExpandedInfoCardProps) => {
    if (!expandedListItems) {
        // TODO: fallback
        return null;
    }

    const isMobile = useMobileDevice();
    const [isShowAll, setShowAll] = useState(false);
    const [sortedItems, setSortedItems] = useState(
        sortByLabel('price')(expandedListItems)
    );
    const [activeSorting, setActiveSorting] = useState('price');

    const handleShowAll = useCallback(() => setShowAll(c => !c), []);

    const handleSortChange = useCallback((value: string) => () => {
        if (value === 'rating' || value === 'price') {
            setSortedItems(sortByLabel(value)(expandedListItems));
        }
    }, []);

    const handleNameSearch = (searchValue: string) => {

    };

    const tableHeading = sortings.map((sorting, id) => ({
        id,
        label: sorting,
        onClick: handleSortChange(sorting),
        isActive: sorting === activeSorting,
    }));

    return (
        <ExpandedInfoCardWrapper {...other}>
            {!isMobile && <Typography variant="subtitle1">{listName}</Typography>}
            <Table>
                <TableHead>
                    <ExpandedCardTableHead onValueSearch={handleNameSearch} cells={tableHeading} />
                </TableHead>
                <TableBody>
                {mapIndexed(({ name, labelValues, id }, index) => ((index < maxItemsToShow) || isShowAll) && (
                    <ExpandedCardTableRow
                        key={id}
                        name={name}
                        id={id}
                        values={labelValues}
                    />
                ), sortedItems)}
                </TableBody>
            </Table>
            {/* 
            <ExpandedToggleButtonGroup
                isSmall
                name="infoFilters"
                defaultValue="price"
                onChange={handleSortChange}
                {...filterProps}
            />
            <ListItemsContainer>
                {mapIndexed(({ name, labelValues, id }, index) => ((index < maxItemsToShow) || isShowAll) && (
                    <ListItem
                        key={id}
                        onClick={dummyOnClick}
                        name={name}
                        labelValues={labelValues}
                    />
                ), sortedItems)}
            </ListItemsContainer>
            {expandedListItems.length > maxItemsToShow && (
                <ButtonContainer>
                    <FloatingButton onClick={handleShowAll} size="small">
                            {isShowAll ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </FloatingButton>
                </ButtonContainer>
            )}         */}
        </ExpandedInfoCardWrapper>
    );
};

const sortByLabel = (filter: keyof UnitedLavelValue) =>
    sortBy(
        compose<ExpandedListItem, any, string>(
            prop(filter),
            prop('labelValues')
        )
    );

const dummyOnClick = () => {
    console.log('Bar clicked');
};
