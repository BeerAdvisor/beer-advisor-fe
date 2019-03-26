import React, { useState, useCallback, useEffect } from 'react';
import { Collapse } from '@material-ui/core';

import { InfoCard, InfoCardProps } from '../InfoCard';
import { BeerInfoCard } from '../../../containers';

export type ExpandableInfoCardProps = {
    bottomLink: string;
    expanded?: boolean;
} & InfoCardProps;

export const ExpandableInfoCard = ({ bottomLink = 'Shows bars', expanded: propsExpanded, onClick, ...other}: ExpandableInfoCardProps) => {
    const [expanded, setExpanded] = useState(propsExpanded);

    const handleExpanded = useCallback((e) => {
        if (onClick) {
            onClick(e);
        }

        setExpanded(exp => !exp);
    }, []);

    useEffect(() => {
            setExpanded(propsExpanded);
    }, [propsExpanded]);

    return (
        <React.Fragment>
            <InfoCard onClick={handleExpanded} bottomLink={bottomLink} {...other} />
            <Collapse in={expanded}> 
                <BeerInfoCard {...other as any}/>
            </Collapse>
        </React.Fragment>
    );
};

export default ExpandableInfoCard;
