import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { Query, GET_BEER_INFO } from '../../graphql';
import { DescriptionCard, AvailabilityCard } from '../../components';
import { beer, beerTypes } from '../../@types';
import { GuaranteedQueryResult } from '../../@types/CustomGqlTypes';
import { SortingLink } from '../../components/ui/AvailabilityCard/AvailabilityCard';
import { SuggestChange } from '../../forms/SuggestChange';

import { BeerDescriptionCardContainer } from './style';
import { SUGGEST_BEER_CHANGE_QUERY } from './graphql';

export interface BeerDescriptionCardProps extends RouteComponentProps {
    beerId: string;
}
export const BeerDescriptionCard = ({
    beerId,
    history,
    ...other
}: BeerDescriptionCardProps) => {
    const [selected, setSelected] = useState(0);
    const [beerEditMode, setBeerEditMode] = useState(true);

    const handleSetBeerEditMode = useCallback(() => setBeerEditMode(editMode => !editMode), []);
    const handleSorting = useCallback(() => setSelected(s => s === 0 ? 1 : 0), []);
    const handleShowAllBars = useCallback(() => history.push(`/form/beers/${beerId}`), []);

    const sortingLinks: SortingLink[] = [
        { name: 'Cost', handler: handleSorting, selected: selected === 0 },
        { name: 'Distance', handler: handleSorting, selected: selected === 1 },
    ];

    return (
        <Query query={GET_BEER_INFO} variables={{ beerId }}>
            {({ data }: GuaranteedQueryResult<beer>) => (
                <BeerDescriptionCardContainer>
                    {!beerEditMode && <DescriptionCard onChangeSuggest={handleSetBeerEditMode} beer={data.beer} {...other} />}
                    {beerEditMode && (
                    <Query query={SUGGEST_BEER_CHANGE_QUERY}>
                        {({ data: { beerTypes: beerTypesData } }: GuaranteedQueryResult<beerTypes>) => (
                        <SuggestChange beerTypes={beerTypesData} {...other} />
                        )}
                    </Query>
                    )}
                    <AvailabilityCard buttonClick={handleShowAllBars} sortingLinks={sortingLinks} />
                </BeerDescriptionCardContainer>
            )}
        </Query>
    );
};

export default BeerDescriptionCard;
