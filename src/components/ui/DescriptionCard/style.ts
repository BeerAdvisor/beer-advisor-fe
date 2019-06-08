import styled from '../../../styled-components';
import { SMALL_BP_UP } from '../../../theme';

export const DescriptionCardWrapper = styled.div`
    padding: 2rem;
    box-shadow: ${props => props.theme.surfaces.shadow_1};
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.palette.light};
    ${SMALL_BP_UP} {
        max-width: 20rem;
    }
    width: 100%;
    box-sizing: border-box;
`;

export const DescriptionCardTopWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;

    &>*:not(:first-child) {
        margin-top: 1rem;
    }
`;

export const DescriptionNameValueWrapper = styled.div`
    display: flex;
    align-self: flex-start;
`;

export const DescriptionCardBottomWrapper = styled(DescriptionCardTopWrapper)`
    justify-content: flex-start;
    margin-top: 1rem;
`;
