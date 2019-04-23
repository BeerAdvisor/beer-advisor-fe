import React, { memo, useState, useCallback } from 'react';
import { isEmpty } from 'ramda';

import { ExpandableInfoCard } from '../ExpandableInfoCard';
import { LabelValue } from '../../../utils';

export interface ExpandableInfoListProps {
    expandableInfoCards: IExpandableInfoCard[];
    bottomLink: string;
}

export interface IExpandableInfoCard {
    name: string;
    labelValues: LabelValue[];
    onInfoClick?: () => void;
}

export default memo(({
    expandableInfoCards,
    bottomLink,
    ...other
}: ExpandableInfoListProps) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleExpandedIndex = useCallback((index) => () => setExpandedIndex(i => i === index ? -1 : index), []);

    const expandableCards = isEmpty(expandableInfoCards) 
    ? null // TODO: Add fallback for no results. Show top beers? Not find page? Suggest to Search? 
    : expandableInfoCards.map((expandableInfoCardProps: IExpandableInfoCard, index: number) => (
        <ExpandableInfoCard
            key={`${expandableInfoCardProps.name}${index}`}
            bottomLink={bottomLink}
            expanded={expandedIndex === index}
            onClick={handleExpandedIndex(index)}
            index={index}
            isFirst={index === 0}
            isLast={index === expandableInfoCards.length - 1}
            {...expandableInfoCardProps}
            {...other}
        />
    ));

    return <React.Fragment>{expandableCards}</React.Fragment>;
});
