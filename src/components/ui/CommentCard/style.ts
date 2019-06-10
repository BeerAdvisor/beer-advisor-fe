import styled from '../../../styled-components';

export const CommentaCardContainer = styled.div`
    border: 1px solid #DBDBDB;
    border-radius: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
`;

export const CommentColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: .5rem;
    &>*:not(:last-child) {
        margin-bottom: 1rem;
    }
`;

export interface CommentWrapperProps {
    shouldLimitLines?: boolean;
    lineLimit: number;
}
export const CommentWrapper = styled.span<CommentWrapperProps>`
   ${props => props.shouldLimitLines && `
        display: -webkit-box
        text-overflow: ellipsis;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;  
        overflow: hidden;
   `}
`;

export const ReadMoreLink = styled.span`
    position: relative;
    left: -7%;

    color: ${props => props.theme.palette.secondary.main};
    text-decoration: underline;
    align-self: center;
    cursor: pointer;
    font-weight: bold;
    font-size: .71rem;
    font-style: italic;
`;

export const MainCommentColumn = styled.div`
    display: flex;
    flex-direction: column;
`;
