import React, { useState } from 'react';
import { ExpansionPanel, ExpansionPanelDetails } from '@material-ui/core';

import { InfoCard, InfoCardProps } from '../InfoCard';

export type ExpandableInfoCardProps = {
    bottomLink: string;
} & InfoCardProps;

export const ExpandableInfoCard = ({ bottomLink = 'Shows bars', ...other}: ExpandableInfoCardProps) => {
    const [expanded, setExpanded] = useState(null);

    // TODO: Use Expandble box? Or Something else? Material UI? Custom solution?
    return ( // Delete height auto, detail: - relative, z-index: -1
        <ExpansionPanel expanded>
            <InfoCard bottomLink={bottomLink} {...other} />
            <ExpansionPanelDetails> 
                ZHOPA
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default ExpandableInfoCard;
