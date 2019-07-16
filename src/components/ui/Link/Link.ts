import { Link as RouterLink } from 'react-router-dom';

import styled from '../../../styled-components';

export const Link = styled(RouterLink)`
    text-decoration: none;
    cursor: inherit;
    color: inherit;
`;

export const BeerLink = styled(RouterLink)`
    cursor: pointer;
    color: ${props => props.theme.palette.primary.main};
`;

export const BarLink = styled(RouterLink)`
    cursor: pointer;
    color: ${props => props.theme.palette.secondary.main};
`;

export default Link;
