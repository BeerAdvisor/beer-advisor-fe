
export type UnitedLavelValue = BeerLabelValue | BarLabelValue;

export interface BeerLabelValue {
    rating?: number | null;
    price?: number;
}

export interface BarLabelValue extends BeerLabelValue {
    distance?: string;
}

export function isBarLabelValue(item: UnitedLavelValue): item is BarLabelValue {
    return (item as BarLabelValue).distance !== undefined;
}
