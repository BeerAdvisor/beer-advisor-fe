import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Person } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

import { CommentColumnWrapper, CommentaCardContainer, CommentWrapper, ReadMoreLink } from './style';

export interface CommentCardProps {
    author: string;
    comment: string;
    imageSrc?: string;
}

export const CommentCard = ({ author, comment, imageSrc }: CommentCardProps) => {
    const commentRef = useRef<HTMLSpanElement | null>(null);
    const [shouldLimitLines, setShouldLimitLines] = useState(false);

    useEffect(() => {
        const { current: commentElement } = commentRef;

        if(commentElement && commentElement.offsetHeight > 100) {
            setShouldLimitLines(true);
        }
    }, [commentRef]);

    const handleShowMoreClick = useCallback(() => setShouldLimitLines(false), []);

    return (
        <CommentaCardContainer>
            <Person />
            <CommentColumnWrapper>
                <Typography variant="subtitle2">{author}</Typography>
                <CommentWrapper ref={commentRef} lineLimit={5} shouldLimitLines={shouldLimitLines}>
                    <Typography variant="body2">{comment}</Typography>
                </CommentWrapper>
            {shouldLimitLines && <ReadMoreLink onClick={handleShowMoreClick}>show more</ReadMoreLink>}
            </CommentColumnWrapper>
        </CommentaCardContainer>
    );
};

export default CommentCard;
