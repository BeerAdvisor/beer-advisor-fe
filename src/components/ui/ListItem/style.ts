import styled from '../../../styled-components';
import { BasicDivider } from '../Dividers';
import { SMALL_BP_DOWN } from '../../../theme';

export const ListItemValuesWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const ListItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const NameContainer = styled.div`
    width: 10rem;
    ${SMALL_BP_DOWN} {
        width: 9rem;
    }
`;

export const ListItemDivider = styled(BasicDivider)`
    width: 100%;
`;
