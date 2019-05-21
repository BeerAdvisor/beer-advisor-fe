import React, { useState, useCallback } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { MainForm, MainFormProps } from '../MainForm';
import { Theme } from '../../theme';
import { Switch } from '../../components';
import { ToggleFormMobileButton } from '../../containers';
import { GEET_BEER_FORM_STATUS, Query } from '../../graphql';
import { useMobileDevice } from '../../utils';

import {
    SwitchWrapper,
    StyledSwipeableViews,
    CombinedFormsContainer,
} from './style';

export type CombinedFormsProps = MainFormProps;

export const CombinedForms = (props: CombinedFormsProps) => {
    const isMobile = useMobileDevice();
    const [isBarForm, setForm] = useState(false);
    const [isOpened, setOpened] = useState(false);

    const handleOpenForm = useCallback(() => setOpened(o => !o), []);
    const { variant } = props;
    const finalVaraint = isMobile ? 'small' : variant;

    const layoutProps = {
        ...props,
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
                    {({ data: { isMainFormOpened } }) => (
                        <SwipeableDrawer
                            anchor="bottom"
                            open={isMainFormOpened}
                            onClose={handleOpenForm}
                            onOpen={handleOpenForm}
                        >
                            {content}
                        </SwipeableDrawer>
                    )}
                </Query>
            ) : (
                content
            )}
            {isMobile && <ToggleFormMobileButton />}
        </>
    );
};

export default CombinedForms;
