import React, { memo, useState, useCallback } from 'react';
import { isEmpty } from 'ramda';

import { ExpandableInfoCard } from '../ExpandableInfoCard';
import { LabelValue } from '../InfoCard';

export interface ExpandableInfoListProps {
    expandableInfoCards: IExpandableInfoCard[];
    bottomLink: string;
}

export interface IExpandableInfoCard {
    name: string;
    labelValues: LabelValue[];
}

export default memo(({
    expandableInfoCards,
    bottomLink,
    ...other
}: ExpandableInfoListProps) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleExpandedIndex = useCallback((index) => () => setExpandedIndex(i => i === index ? -1 : index), []);

    const expandableCards = isEmpty(expandableInfoCards) 
    ? null
    : expandableInfoCards.map((expandableInfoCardProps: IExpandableInfoCard, index: number) => (
        <ExpandableInfoCard
            bottomLink={bottomLink}
            expanded={expandedIndex === index}
            onClick={handleExpandedIndex(index)}
            {...expandableInfoCardProps}
            {...other}
        />
    ));

    return <React.Fragment>{expandableCards}</React.Fragment>;
});
