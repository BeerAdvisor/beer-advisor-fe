import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Close as CloseIcon } from '@material-ui/icons';
import { MutationFn } from 'react-apollo';
// @ts-ignore
import Div100vh from 'react-div-100vh';

import BarSearchForm, { BarForm } from '../MainForm/BarSearchForm';
import { BeerSearchForm, BeerSearchFormProps } from '../MainForm';
import { Switch } from '../../components';
import { ToggleFormMobileButton } from '../../containers';
import {
    GEET_BEER_FORM_STATUS,
    Query,
    Mutation,
    OPEN_FORM_MUTATION,
    CLOSE_FORM_MUTATION,
    SEARCH_BAR_MUTATION,
} from '../../graphql';
import { useMobileDevice } from '../../utils';

import {
    StyledSwipeableViews,
    CombinedFormsContainer,
    RightCornerIconButton,
    CombinedFormsWrapper,
} from './style';

export type CombinedFormsProps = BeerSearchFormProps;

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
        <CombinedFormsWrapper variant={isMobile ? undefined : variant}>
        <Switch variant={isMobile ? undefined : variant} onChange={setForm} onText="Bar" offText="Beer" />
        <CombinedFormsContainer>
            <StyledSwipeableViews
                axis={'x'}
                index={Number(isBarForm)}
                containerStyle={{ width: '100%' }}
            >
                <BeerSearchForm variant={finalVaraint} {...layoutProps} />
                <Mutation mutation={SEARCH_BAR_MUTATION}>
                    {(searchBar: MutationFn<any, BarForm>) => 
                        <BarSearchForm searchBar={searchBar} variant={finalVaraint} {...layoutProps} />
                    }
                </Mutation>
            </StyledSwipeableViews>
        </CombinedFormsContainer>
        </CombinedFormsWrapper>
    );

    return <>{isMobile ? <MobileCombinedForm content={content} /> : content}</>;
};

export interface MobileCombinedFormProps {
    content: JSX.Element;
}
const MobileCombinedForm = ({ content }: MobileCombinedFormProps) => (
    <Query query={GEET_BEER_FORM_STATUS}>
        {({ data: { isMainFormOpened } }) => (
            <Mutation mutation={OPEN_FORM_MUTATION}>
                {(openForm: () => void) => (
                    <Mutation mutation={CLOSE_FORM_MUTATION}>
                        {(closeForm: () => void) => (
                            <>
                                <SwipeableDrawer
                                    anchor="bottom"
                                    disableDiscovery
                                    disableBackdropTransition
                                    open={isMainFormOpened}
                                    onClose={closeForm}
                                    onOpen={openForm}
                                >
                                    <Div100vh>
                                        <RightCornerIconButton
                                            onClick={closeForm}
                                            color="inherit"
                                            aria-label="Close"
                                        >
                                            <CloseIcon />
                                        </RightCornerIconButton>
                                        {content}
                                    </Div100vh>
                                </SwipeableDrawer>
                                {!isMainFormOpened && (
                                    <ToggleFormMobileButton />
                                )}
                            </>
                        )}
                    </Mutation>
                )}
            </Mutation>
        )}
    </Query>
);

export default CombinedForms;
