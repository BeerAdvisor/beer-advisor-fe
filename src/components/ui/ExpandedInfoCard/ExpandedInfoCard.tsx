import React, { ReactNode } from 'react';
import { Typography } from '@material-ui/core';
import { map } from 'ramda';

import { ToogleButtonGroupField } from '../ToogleButton';
import { ListItem } from '../ListItem';

import { ExpandedInfoCardWrapper, ListItemsContainer } from './style';

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
            { label: 'Rating', value: '4.5' },
            { label: 'Price', value: '1000 CZK' },
            { label: 'Distance', value: '300 M' },
        ],
    },
    {
        name: 'Mala ryba',
        id: 2,
        labelValues: [
            { label: 'Rating', value: '4.5' },
            { label: 'Price', value: '100 CZK' },
            { label: 'Distance', value: '300 M' },
        ],
    },
    {
        name: 'Mila tchyne',
        id: 3,
        labelValues: [
            { label: 'Rating', value: '4.5' },
            { label: 'Price', value: '100 CZK' },
            { label: 'Distance', value: '300 M' },
        ],
    },
];

export default ({
    maxItemsToShow = 3,
    isBeer = false,
    listName,
    expandedListItems,
    ...other
}: ExpandedInfoCardProps) => {
    const filterProps = {
        values: ['Rating', 'Price', 'Distance'],
        // label: 'Filter by',
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
                {map(({ name, labelValues, id }) => (
                    <ListItem
                        key={id}
                        onClick={dummyOnClick}
                        name={name}
                        labelValues={labelValues}
                    />
                ))(bars)}
            </ListItemsContainer>
        </ExpandedInfoCardWrapper>
    );
};

const dummyOnClick = () => {
    console.log('Bar clicked');
};
