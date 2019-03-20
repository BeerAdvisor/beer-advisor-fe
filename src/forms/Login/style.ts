import styled from '../../styled-components';

export interface LoginFormWrapper {
    login?: boolean;
}
export const LoginFormWrapper = styled.div<LoginFormWrapper>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: ${({login}) => login ? '300px' : '400px'};
    border-radius: ${props => props.theme.borderRadius};
    background-color: #FFFFFF;
    padding: 0 20px;
`;

export const StyledAnchor = styled.a`
    margin-top: 12px;
    text-decoration: underline;
    cursor: pointer;
`;
