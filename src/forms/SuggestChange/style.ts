import styled from '../../styled-components';
import { FloatingButton } from '../../components';
import { SMALL_BP_UP } from '../../theme';

export const StyledSuggestChange = styled.form`
    display: flex;
    flex-direction: column;
    ${SMALL_BP_UP} {
        max-width: 20rem;
    }
    box-shadow: ${props => props.theme.surfaces.shadow_1};
    width: 100%;
    background-color: ${props => props.theme.palette.light};
    border-radius: ${props => props.theme.borderRadius};
    padding: 2rem;
    box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
    margin-top: 2rem;
`;

export const SuggestChangeFloatingButton = styled(FloatingButton)`
    align-self: flex-end;
`;
