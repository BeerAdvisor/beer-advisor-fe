import React, { useCallback } from 'react';
import { ApolloClient } from 'apollo-boost';

import { Query, GEET_BEER_FORM_STATUS, Mutation, OPEN_FORM_MUTATION } from '../../graphql';
import { FloatingButton } from '../../components';
import { Search } from '../../components/Icons';
import styled from '../../styled-components';

const ToggleFormMobileButton = () => {
    const renderToggler = useCallback(
        openForm => {
            return (
                <StyledFloatingButton
                    color="primary"
                    onClick={openForm}
                >
                    <Search />
                </StyledFloatingButton>
            );
        },
        []
    );

    return <Mutation mutation={OPEN_FORM_MUTATION}>{renderToggler}</Mutation>;
};

const StyledFloatingButton = styled(FloatingButton)`
    position: fixed;
    left: 42%;
    bottom: 4%;
    z-index: ${props => props.theme.zIndex.tooltip};

    box-shadow: 0px 5px 16px rgba(0, 153, 153, 0.4);
`;

export default ToggleFormMobileButton;
