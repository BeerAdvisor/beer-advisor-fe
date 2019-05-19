import React, { useState, useCallback } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { useTheme } from '@material-ui/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { MainForm, MainFormProps } from '../MainForm';
import { Theme } from '../../theme';
import { Switch } from '../../components';
import { ToggleFormMobileButton } from '../../containers';
import { GEET_BEER_FORM_STATUS, Query } from '../../graphql';

import {
    SwitchWrapper,
    StyledSwipeableViews,
    CombinedFormsContainer,
} from './style';

export type CombinedFormsProps = MainFormProps;

export const CombinedForms = (props: CombinedFormsProps) => {
    const theme = useTheme<Theme>();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isBarForm, setForm] = useState(false);
    const [isOpened, setOpened] = useState(false);

    const handleOpenForm = useCallback(() => setOpened(o => !o), []);
    const { variant } = props;

    const layoutProps = {
        ...props,
        searchFieldPlaceholder: 'Find a beer', // TODO: constants, export to separate logic components
        searchFieldLabel: 'Name',
        selectLabel: 'Type',
        sliderMaxValue: 100,
        sliderMinValue: 0,
        sliderStep: 1,
    };

    return (
        <CombinedFormsContainer variant={variant}>
            <SwitchWrapper>
                <Switch onChange={setForm} onText="Bar" offText="Beer" />
            </SwitchWrapper>
            <Query query={GEET_BEER_FORM_STATUS}>
                {({ data: { isMainFormOpened } }) =>
                    isMobile ? (
                        <SwipeableDrawer
                            anchor="bottom"
                            open={isMainFormOpened}
                            onClose={handleOpenForm}
                            onOpen={handleOpenForm}
                        >
                            <StyledSwipeableViews
                                axis={'x'}
                                index={Number(isBarForm)}
                                containerStyle={{ width: '100%' }}
                            >
                                <MainForm variant={variant} {...layoutProps} />
                                <MainForm variant={variant} {...layoutProps} />
                            </StyledSwipeableViews>
                        </SwipeableDrawer>
                    ) : (
                        <StyledSwipeableViews
                            axis={'x'}
                            index={Number(isBarForm)}
                            containerStyle={{ width: '100%' }}
                        >
                            <MainForm variant={variant} {...layoutProps} />
                            <MainForm variant={variant} {...layoutProps} />
                        </StyledSwipeableViews>
                    )
                }
            </Query>
            {isMobile && <ToggleFormMobileButton />}
        </CombinedFormsContainer>
    );
};

export default CombinedForms;
