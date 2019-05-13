import styled from '../../styled-components';

export const StyledSuggestChange = styled.form`
    max-width: 20rem;
    width: 100%;
    background-color: ${props => props.theme.palette.light};
    border-radius: ${props => props.theme.borderRadius};
    padding: 2rem;
`;

export const ButtonWrapper = styled.div`
    margin-top: 2rem;
`;
