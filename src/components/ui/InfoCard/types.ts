import { MouseEvent } from 'react';

import { LabelValue } from '../../../utils';

import { InfoCardStyledProps } from './style';

export interface InfoCardProps extends InfoCardStyledProps {
    labelValues: LabelValue[];
    color?: 'primary' | 'secondary';
    name?: string;
    bottomLink?: string;
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    onInfoClick?: () => void;
    expanded?: boolean;
    rating?: number;
}
