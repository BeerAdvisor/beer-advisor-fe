import React, { ReactNode, useState, useCallback } from 'react';
import { Typography } from '@material-ui/core';
import { map, addIndex } from 'ramda';

import { KeyboardArrowDown, KeyboardArrowUp } from '../../Icons'
import { ToogleButtonGroupField } from '../ToogleButton';
import { ListItem } from '../ListItem';
import { FloatingButton } from '../FloatingButton';

import { ExpandedInfoCardWrapper, ListItemsContainer, ButtonContainer } from './style';

export interface ExpandedInfoCardProps {
    listName: ReactNode;
    expandedListItems?: ReactNode;
    maxItemsToShow?: number;
    isBeer?: boolean;
}

const bars = [
    {
        name: 'Kozlovna',
        id: 1,
        labelValues: [
            { label: 'Rating', value: '5' },
            { label: 'Price', value: '1000 CZK' },
            { label: 'Distance', value: '300 M' },
        ],
    },
    {
        name: 'Mala ryba',
        id: 2,
        labelValues: [
            { label: 'Rating', value: '3' },
            { label: 'Price', value: '100 CZK' },
            { label: 'Distance', value: '300 M' },
        ],
    },
    {
        name: 'Mila tchyne',
        id: 3,
        labelValues: [
            { label: 'Rating', value: '4.5' },
            { label: 'Price', value: '20 CZK' },
            { label: 'Distance', value: '300 M' },
        ],
    },
    {
        name: 'Atmoska',
        id: 4,
        labelValues: [
            { label: 'Rating', value: '4.5' },
            { label: 'Price', value: '50 CZK' },
            { label: 'Distance', value: '1 KM' },
        ],
    },
    {
        name: 'The Pub',
        id: 5,
        labelValues: [
            { label: 'Rating', value: '4.5' },
            { label: 'Price', value: '100 CZK' },
            { label: 'Distance', value: '300 M' },
        ],
    },
    {
        name: 'U Novaku',
        id: 6,
        labelValues: [
            { label: 'Rating', value: '4.5' },
            { label: 'Price', value: '100 CZK' },
            { label: 'Distance', value: '300 M' },
        ],
    },
];

const mapIndexed = addIndex<any>(map);

export default ({
    maxItemsToShow = 3,
    isBeer = false,
    listName,
    expandedListItems,
    ...other
}: ExpandedInfoCardProps) => {
    const [isShowAll, setShowAll] = useState(false);

    const handleShowAll = useCallback(() => setShowAll(c => !c), []);
    const filterProps = {
        values: ['Rating', 'Price', 'Distance'],
    };

    return (
        <ExpandedInfoCardWrapper {...other}>
            <Typography variant="subtitle1">{listName}</Typography>
            <ToogleButtonGroupField
                isSmall
                name="infoFilters"
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
                ), bars)}
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

const dummyOnClick = () => {
    console.log('Bar clicked');
};
