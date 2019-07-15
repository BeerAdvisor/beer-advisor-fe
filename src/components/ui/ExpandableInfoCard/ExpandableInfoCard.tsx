import React, { useState, useCallback, useEffect, ReactNode } from 'react';

import { Collapse } from '../Collapse';
import { MobileInfoCard, InfoCard, InfoCardProps } from '../InfoCard';
import { useMobileDevice } from '../../../utils';

export type ExpandableInfoCardProps = {
    bottomLink?: string;
    expanded?: boolean;
    expandedContent?: ReactNode;
    color?: 'primary' | 'secondary';
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

    const infoCardProps = {
        bottomLink,
        expanded,
        onClick: handleExpanded,
        ...other,
    };

    return (
        <React.Fragment>
            {useMobileDevice() ? (
                <MobileInfoCard {...infoCardProps} />
            ) : (
                <InfoCard {...infoCardProps} />
            )}
            <Collapse in={expanded}>{expandedContent}</Collapse>
        </React.Fragment>
    );
};

export default ExpandableInfoCard;
