import styled from '../../../styled-components';

export const DescriptionCardWrapper = styled.div`
    padding: 2rem;
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.palette.light};
    max-width: 20rem;
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

export const RatingWrapper = styled.div`
    margin-top: 2rem !important;
    align-self: flex-start;
`;

export const LeaveRatingWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 1rem;
`;

export const DescriptionCardBottomWrapper = styled(DescriptionCardTopWrapper)`
    justify-content: flex-start;
    margin-top: 1rem;
`;
