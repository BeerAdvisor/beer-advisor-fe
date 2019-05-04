import React, { ReactNode, useState, useCallback } from 'react';
import { Typography } from '@material-ui/core';
import { map, addIndex, sortBy, compose, prop } from 'ramda';

import { KeyboardArrowDown, KeyboardArrowUp } from '../../Icons';
import { ToogleButtonGroup } from '../ToogleButton';
import { ListItem } from '../ListItem';
import { FloatingButton } from '../FloatingButton';
import { mapIndexed } from '../../../utils';

import { ExpandedInfoCardWrapper, ListItemsContainer, ButtonContainer } from './style';

export interface ExpandedInfoCardProps {
    listName: ReactNode;
    expandedListItems?: ReactNode;
    maxItemsToShow?: number;
    isBeer?: boolean;
}

export interface Bar {
    name: string;
    id: number;
    labelValues: BarLabelValue;
}

export interface BarLabelValue {
    rating: string;
    price: string;
    distance: string;
}

const DUMMY_BAR_LABEL_VALUE: BarLabelValue = {
    rating: '',
    price: '',
    distance: '',
};

const bars: Bar[] = [
    {
        name: 'Kozlovna',
        id: 1,
        labelValues: {
            rating: '4',
            price: '2000 CZK',
            distance: '1000 M',
        },
    },
    {
        name: 'Mala ryba',
        id: 2,
        labelValues: {
            rating: '3.5',
            price: '2000 CZK',
            distance: '12 M',
        },
    },
    {
        name: 'Mila tchyne',
        id: 3,
        labelValues: {
            rating: '4.2',
            price: '2000 CZK',
            distance: '300 M',
        },
    },
    {
        name: 'Atmoska',
        id: 4,
        labelValues: {
            rating: '4.3',
            price: '1010 CZK',
            distance: '300 M',
        },
    },
    {
        name: 'The Pub',
        id: 5,
        labelValues: {
            rating: '5',
            price: '100 CZK',
            distance: '300 M',
        },
    },
    {
        name: 'U Novaku',
        id: 6,
        labelValues: {
            rating: '5',
            price: '10 CZK',
            distance: '100 M',
        },
    },
];

const filterProps = { values: Object.keys(DUMMY_BAR_LABEL_VALUE)};

export default ({
    maxItemsToShow = 3,
    isBeer = false,
    listName,
    expandedListItems,
    ...other
}: ExpandedInfoCardProps) => {
    const [isShowAll, setShowAll] = useState(false);
    const [sortedBars, setSortedBars] = useState(sortByLabel('price')(bars));

    const handleShowAll = useCallback(() => setShowAll(c => !c), []);

    const handleSortChange = useCallback((value: string) => {
        if (value === 'rating' || value === 'distance' || value === 'price' ) {
            setSortedBars(sortByLabel(value)(bars));
        }
    }, []);

    return (
        <ExpandedInfoCardWrapper {...other}>
            <Typography variant="subtitle1">{listName}</Typography>
            <ToogleButtonGroup
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
                ), sortedBars)}
            </ListItemsContainer>
            {bars.length !== maxItemsToShow && (
                <ButtonContainer>
                    <FloatingButton onClick={handleShowAll} size="small">
                            {isShowAll ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </FloatingButton>
                </ButtonContainer>
            )}        
        </ExpandedInfoCardWrapper>
    );
};

const sortByLabel = (filter: keyof BarLabelValue) => sortBy(
        compose<Bar, BarLabelValue, string>(
            prop(filter),
            prop('labelValues')
    )
);

const dummyOnClick = () => {
    console.log('Bar clicked');
};
