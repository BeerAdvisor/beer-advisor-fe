import React, { ReactNode, useState, useCallback } from 'react';
import { Typography } from '@material-ui/core';
import { sortBy, compose, prop, reduce } from 'ramda';

import { KeyboardArrowDown, KeyboardArrowUp } from '../../../Icons';
import { FloatingButton } from '../../common/FloatingButton';
import { useMobileDevice } from '../../../../utils';
import { UnitedLavelValue, BarLabelValue } from '../../../../@types';
import { DownwardsMarginBox } from '../../../../commonStyles';
import { SearchResultTable } from '../SearchResultTable';
import { TableBody } from '../SearchResultTable/SearchResultTable';

import {
    ExpandedInfoCardWrapper,
    ButtonContainer,
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
    link: ReactNode;
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

    const handleSortChange = useCallback(
        (value: string) => () => {
            if (value === 'rating' || value === 'price' || value === 'distance') {
                setSortedItems(sortByLabel(value)(expandedListItems));
                setActiveSorting(value);
            }
        },
        []
    );

    const handleNameSearch = (searchValue: string) => {};

    const tableHeading = sortings.map((sorting, id) => ({
        id,
        label: sorting,
        onClick: handleSortChange(sorting),
        isActive: sorting === activeSorting,
    }));

    // TODO: export to hook
    let index = 0;
    const tableBody = reduce<ExpandedListItem, TableBody[]>(
        (acc: TableBody[], { link, labelValues, id }: ExpandedListItem) => {
            if (index < maxItemsToShow || isShowAll) {
                acc.push({
                    name,
                    link,
                    id,
                    values: Object.values(labelValues),
                });

                index++;
                return acc;
            }

            index++;
            return acc;
        },
        [],
        sortedItems
    );

    index = 0;

    return (
        <ExpandedInfoCardWrapper {...other}>
            {!isMobile && (
                <Typography variant="subtitle1">{listName}</Typography>
            )}
            <DownwardsMarginBox />
            <SearchResultTable handleValueSearch={handleNameSearch} tableHeading={tableHeading} tableBody={tableBody} />
            {expandedListItems.length > maxItemsToShow && (
                <ButtonContainer>
                    <FloatingButton onClick={handleShowAll} size="small">
                        {isShowAll ? (
                            <KeyboardArrowUp />
                        ) : (
                            <KeyboardArrowDown />
                        )}
                    </FloatingButton>
                </ButtonContainer>
            )}
        </ExpandedInfoCardWrapper>
    );
};

const sortByLabel = (filter: keyof BarLabelValue) =>
    sortBy(
        compose<ExpandedListItem, any, string>(
            prop(filter),
            prop('labelValues')
        )
    );
