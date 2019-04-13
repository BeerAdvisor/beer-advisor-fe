import React, { useState, useCallback, useEffect, ReactNode } from 'react';

import { Collapse } from '../Collapse';
import { InfoCard, InfoCardProps } from '../InfoCard';

export type ExpandableInfoCardProps = {
    bottomLink?: string;
    expanded?: boolean;
    expandedContent?: ReactNode;
} & InfoCardProps;

export const ExpandableInfoCard = ({
    bottomLink = 'Shows bars',
    expanded: propsExpanded,
    expandedContent,
    onClick,
    ...other
}: ExpandableInfoCardProps) => {
    const [expanded, setExpanded] = useState(propsExpanded);

    const handleExpanded = useCallback(e => {
        if (onClick) {
            onClick(e);
        }

        setExpanded(exp => !exp);
    }, []);

    useEffect(
        () => {
            setExpanded(propsExpanded);
        },
        [propsExpanded]
    );

    return (
        <React.Fragment>
            <InfoCard
                onClick={handleExpanded}
                bottomLink={bottomLink}
                {...other}
            />
            <Collapse in={expanded}>{expandedContent}</Collapse>
        </React.Fragment>
    );
};

export default ExpandableInfoCard;
