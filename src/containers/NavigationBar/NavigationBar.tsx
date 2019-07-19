import React from 'react';

import { NavigationBar } from '../../components';
import { Link } from '../../components/ui/common/Link';

const HOME_LINK = <Link key="home" to="/">Beer Advisor</Link>;
const FAVOURITE_LINK = <Link key="favourite" to="/">Favourite</Link>;
const TOP_RATING_LINK = <Link key="top" to="/">Top</Link>;
const USER_LINK = <Link key="user" to="/login">Sign in</Link>;

const NavigationLinks = [HOME_LINK, FAVOURITE_LINK, TOP_RATING_LINK, USER_LINK];

export const NavigationBarContainer: React.FunctionComponent = () => (
    <NavigationBar listItems={NavigationLinks} midItem={0} />
);

export default NavigationBarContainer;
