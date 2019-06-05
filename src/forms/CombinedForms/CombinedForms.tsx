import React, { useState, useCallback } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { ApolloClient } from 'apollo-boost';
// @ts-ignore
import Div100vh from 'react-div-100vh';

import { MainForm, MainFormProps } from '../MainForm';
import { Theme } from '../../theme';
import { Switch } from '../../components';
import { ToggleFormMobileButton } from '../../containers';
import { GEET_BEER_FORM_STATUS, Query } from '../../graphql';
import { useMobileDevice } from '../../utils';
import { toggleBeerFormStatus } from '../../containers/ToggleFormMobileButton/ToggleFormMobileButton';

import {
    SwitchWrapper,
    StyledSwipeableViews,
    CombinedFormsContainer,
} from './style';

export type CombinedFormsProps = MainFormProps;

export const CombinedForms = ({ variant, ...other }: CombinedFormsProps) => {
    const isMobile = useMobileDevice();
    const [isBarForm, setForm] = useState(false);

    const finalVaraint = isMobile ? 'small' : variant;

    const layoutProps = {
        ...other,
        searchFieldPlaceholder: 'Find a beer', // TODO: constants, export to separate logic components
        searchFieldLabel: 'Name',
        selectLabel: 'Type',
        sliderMaxValue: 100,
        sliderMinValue: 0,
        sliderStep: 1,
    };

    const content = (
        <CombinedFormsContainer variant={isMobile ? undefined : variant}>
            <Switch onChange={setForm} onText="Bar" offText="Beer" />
            <StyledSwipeableViews
                axis={'x'}
                index={Number(isBarForm)}
                containerStyle={{ width: '100%' }}
            >
                <MainForm variant={finalVaraint} {...layoutProps} />
                <MainForm variant={finalVaraint} {...layoutProps} />
            </StyledSwipeableViews>
        </CombinedFormsContainer>
    );

    return (
        <>
            {isMobile ? (
                <Query query={GEET_BEER_FORM_STATUS}>
                    {({ data: { isMainFormOpened }, client }) => (
                        <>
                        <SwipeableDrawer
                            anchor="bottom"
                            disableDiscovery
                            disableBackdropTransition
                            open={isMainFormOpened}
                            onClose={handleCloseForm(client)}
                            onOpen={handleOpenForm(client)}
                        >
                            <Div100vh>
                                {content}
                            </Div100vh>
                        </SwipeableDrawer>
                        {!isMainFormOpened && <ToggleFormMobileButton />}
                        </>
                    )}
                </Query>
            ) : (
                content
            )}
        </>
    );
};

const handleOpenForm = (client: ApolloClient<any>) => toggleBeerFormStatus(client, true);
const handleCloseForm = (client: ApolloClient<any>) => toggleBeerFormStatus(client, false);

export default CombinedForms;
