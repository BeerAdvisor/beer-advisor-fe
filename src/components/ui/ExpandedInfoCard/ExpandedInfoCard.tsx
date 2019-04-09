import React, { ReactNode } from 'react';

import { ExpandedInfoCardWrapper } from './style'; 

export interface ExpandedInfoCardProps {
    listName: ReactNode;
    expandedListItems: ReactNode;
    maxItemsToShow?: number;
    isBeer?: boolean;
}
export default ({ maxItemsToShow = 3, isBeer = false, ...other }: ExpandedInfoCardProps) => {
    return <ExpandedInfoCardWrapper />;
};
