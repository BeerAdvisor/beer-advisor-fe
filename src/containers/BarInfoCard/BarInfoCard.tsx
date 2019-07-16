import React from 'react';
import { isEmpty, map, memoizeWith, identity } from 'ramda';
import { RouteComponentProps } from 'react-router';
import { History } from 'history';

import { FindBars, FindBars_findBars } from '../../@types';
import { ExpandableInfoList, ExpandedInfoCard } from '../../components';
import { BarLink } from '../../components/ui/Link/Link';

export interface BarRouteParams {
    barId: string;
}

export type BarInfoProps = {
    searchResult: FindBars;
} & RouteComponentProps<BarRouteParams>;

export const BarInfoCard = ({
    searchResult,
    history,
    ...other
}: BarInfoProps) => {
    if (!searchResult.findBars) {
        return null;
    }

    const expandableInfoCards = memoMapBeerCards(
        history,
        searchResult.findBars
    );

    return (
        <ExpandableInfoList
            color="primary"
            bottomLink="Show beers"
            expandableInfoCards={expandableInfoCards}
            {...other}
        />
    );
};

const barSortings = ['price', 'rating'];

const mapBarInfoCards = (
    history: History<any>,
    bars: FindBars_findBars[]
) => {
    const handleInfoClick = (barId: string) => () => {
        history.push(`/form/bar/${barId}`);
    };

    return map(({ name, id, address, barRating, openTime, closeTime, beerList }: FindBars_findBars) => {
        const labelValues = [
            { label: 'Address', value: address },
            { label: 'Open hours', value: `${openTime} - ${closeTime}` },
            { label: 'Kitchen', value: 'To be added' },
        ];

        const listHeader = (
        <>
            Beers you can try in{' '}
            <BarLink to={`/form/bar/${id}`}>{name}</BarLink>
        </>
        );

        const { items } = beerList;

        let expandedListItems;
        if (items && !isEmpty(items)) {
            expandedListItems = items.map(({ beer: { name: beerName, id: beerId, avgRating }, price }) => ({
                name: beerName,
                id: beerId,
                labelValues: {
                    price,
                    rating: avgRating,
                },
            }));
        }

        return {
            name,
            labelValues,
            rating: barRating,
            onInfoClick: handleInfoClick(id),
            expandedContent: (
                <ExpandedInfoCard
                    expandedListItems={expandedListItems}
                    key={id}
                    listName={listHeader}
                    sortings={barSortings}
                />
            ),
        };
    }, bars);
};

const memoMapBeerCards = memoizeWith(
    identity,
    mapBarInfoCards
);

export default BarInfoCard;
