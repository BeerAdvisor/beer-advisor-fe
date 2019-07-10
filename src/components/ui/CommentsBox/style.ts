import styled from '../../../styled-components';
import { VerticalFlexBox } from '../../../commonStyles';
import { SmallButton } from '../Button';
import { SMALL_BP_UP } from '../../../theme';

export const CommentsBoxContainer = styled(VerticalFlexBox)`
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.surfaces.shadow_1};
    padding: 2rem 1rem;
    ${SMALL_BP_UP} {
        padding: 2rem;
    }
    width: 100%;
    background-color: ${props => props.theme.palette.light};
    box-sizing: border-box;
    &>*:not(:last-child) {
        margin-bottom: 1rem;
    }
    &>*:nth-child(1) {
        margin-bottom: 1rem;
    }
`;
