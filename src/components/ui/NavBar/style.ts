import styled from '../../../styled-components';

export const NavigationBarWrapper = styled.div``;

export const NavList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    height: 65px;
    background-color: #FFFFFF;
    box-shadow: 0.6px 0.8px 13.6px 2.4px rgba(0, 0, 0, 0.14);
    padding: 0 50px;
    box-sizing: border-box;

    *:not(:last-child):not(:first-child) {
        margin-right: 40px
    }
`;

export const NavElement = styled.li`
    font-family: Muli;
    font-size: 21.5px;
    letter-spacing: 0.5px;
    color: #000000;
    cursor: pointer;

    &: hover {
        color: ${props => props.theme.palette.primary.light};
    }
`;

export const MidNavElement = styled(NavElement)`
    margin-right: auto;
`;
