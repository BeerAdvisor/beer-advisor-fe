import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { Query, GET_BEER_INFO } from '../../graphql';
import { DescriptionCard, AvailabilityCard } from '../../components';
import { beer } from '../../@types';
import { GuaranteedQueryResult } from '../../@types/CustomGqlTypes';
import { SortingLink } from '../../components/ui/AvailabilityCard/AvailabilityCard';

import { BeerDescriptionCardContainer } from './style';

export interface BeerDescriptionCardProps extends RouteComponentProps {
    beerId: string;
}
export const BeerDescriptionCard = ({
    beerId,
    history,
    ...other
}: BeerDescriptionCardProps) => {
    const [selected, setSelected] = useState(0);
    const handleSorting = useCallback(() => setSelected(s => s === 0 ? 1 : 0), []);

    const handleShowAllBars = useCallback(() => history.push(`/beers/${beerId}`), []);

    const sortingLinks: SortingLink[] = [
        { name: 'Cost', handler: handleSorting, selected: selected === 0 },
        { name: 'Distance', handler: handleSorting, selected: selected === 1 },
    ];

    return (
        <Query query={GET_BEER_INFO} variables={{ beerId }}>
            {({ data }: GuaranteedQueryResult<beer>) => (
                <BeerDescriptionCardContainer>
                    <DescriptionCard beer={data.beer} {...other} />
                    <AvailabilityCard buttonClick={handleShowAllBars} sortingLinks={sortingLinks} />
                </BeerDescriptionCardContainer>
            )}
        </Query>
    );
};

export default BeerDescriptionCard;
