import styled from '../../styled-components';

export const BeerInfoCardStub = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    height: 60vh;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.theme.palette.light};

    border-radius: ${props => props.theme.borderRadius};
`;
