import React from 'react';
import { ApolloConsumer, ApolloClient } from 'apollo-boost';

const toggleBeerFormStatus = (client: ApolloClient<any>, isMainFormOpened: bollean) => client.writeData({ data: { isMainFormOpened } })

const ToggleFormMobileButton = () => {
    const renderToggler = useCallback(({ data: { isMainFormOpened }, client })  => {

        return <FloatingButton onClick={toggleBeerFormStatus(client, !isMainFormOpened)}/>;
    }, []);

    return (
        <Query query={GEET_BEER_FORM_STATUS}>
            {renderToggler}
        </Query  >
    )
}

export default ToggleFormMobileButton;
