import React, { useState, useCallback, useEffect } from 'react';
import { ExpansionPanel, ExpansionPanelDetails, Collapse } from '@material-ui/core';

import { InfoCard, InfoCardProps } from '../InfoCard';

export type ExpandableInfoCardProps = {
    bottomLink: string;
    expanded?: boolean;
} & InfoCardProps;

export const ExpandableInfoCard = ({ bottomLink = 'Shows bars', expanded: propsExpanded, ...other}: ExpandableInfoCardProps) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpanded = useCallback(() => setExpanded(e => !e), []);

    useEffect(() => {
        if (propsExpanded) {
            setExpanded(propsExpanded);
        }
    }, [propsExpanded]);

    return (
        <React.Fragment>
            <InfoCard onClick={handleExpanded} bottomLink={bottomLink} {...other} />
            <Collapse in={expanded}> 
                ZHOPA
            </Collapse>
        </React.Fragment>
    );
};

export default ExpandableInfoCard;
