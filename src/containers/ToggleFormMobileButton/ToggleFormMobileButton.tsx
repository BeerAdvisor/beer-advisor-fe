import React, { useCallback } from 'react';
import { ApolloClient } from 'apollo-boost';

import { Query, GEET_BEER_FORM_STATUS } from '../../graphql';
import { FloatingButton } from '../../components';
import { Search } from '../../components/Icons';
import styled from '../../styled-components';

const toggleBeerFormStatus = (
    client: ApolloClient<any>,
    isMainFormOpened: boolean,
    refetch: () => void
) => () => {
    client.writeData({ data: { isMainFormOpened } });
    // refetch();
};

const ToggleFormMobileButton = () => {
    const renderToggler = useCallback(
        ({ data: { isMainFormOpened }, client, refetch }) => {
            return (
                <StyledFloatingButton
                    color="primary"
                    onClick={toggleBeerFormStatus(
                        client,
                        !isMainFormOpened,
                        refetch
                    )}
                >
                    <Search />
                </StyledFloatingButton>
            );
        },
        []
    );

    return <Query query={GEET_BEER_FORM_STATUS}>{renderToggler}</Query>;
};

const StyledFloatingButton = styled(FloatingButton)`
    position: absolute;
    left: 42%;
    bottom: 4%;
    z-index: ${props => props.theme.zIndex.tooltip};

    box-shadow: 0px 5px 16px rgba(0, 153, 153, 0.4);
`;

export default ToggleFormMobileButton;
