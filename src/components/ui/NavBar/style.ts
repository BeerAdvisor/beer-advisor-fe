import styled from '../../../styled-components';

export const NavigationBarWrapper = styled.div``;

export const NavList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 ${props => props.theme.sidesPadding};
    margin: 0;
    list-style: none;
    width: 100%;
    height: 3.5rem;
    background-color: ${props => props.theme.palette.background};
    box-shadow: 0.6px 0.8px 13.6px 2.4px rgba(0, 0, 0, 0.14);
    box-sizing: border-box;

    *:not(:last-child):not(:first-child) {
        margin-right: 40px
    }
`;

export const NavElement = styled.li`
    font-family: Montserrat;
    font-size: 18px;
    color: #000000;
    cursor: pointer;

    &: hover {
        color: ${props => props.theme.palette.primary.light};
    }
`;

export const MidNavElement = styled(NavElement)`
    margin-right: auto;
`;
