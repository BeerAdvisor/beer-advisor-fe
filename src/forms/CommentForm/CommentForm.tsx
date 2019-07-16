import React from 'react';
import { Formik, FormikProps, Field, FormikActions } from 'formik';
import { MutationFn } from 'react-apollo';

import { FormixInputField } from '../../components/formix';
import { CommentBeerVariables } from '../../@types';

import { LimitedWidthButton } from './style';
import { CommentBarVariables } from '../../@types/__generated__/CommentBar';

const renderCommentForm = ({ handleSubmit }: FormikProps<any>) => (
    <form onSubmit={handleSubmit}>
        <Field
            rows={3}
            multiline
            placeholder="Leave your comment"
            component={FormixInputField}
            name="comment"
            type="text"
        />
        <LimitedWidthButton color="primary" variant="outlined" type="submit">
            Leave a comment
        </LimitedWidthButton>
    </form>
);

type SubmitCommentVariables = Pick<CommentBeerVariables, 'comment'>;

export interface CommentFormProps {
    submitBeerComment?: MutationFn<any, CommentBeerVariables>;
    submitBarComment?: MutationFn<any, CommentBarVariables>;
    id: string;
}

const CommentForm = ({ id, submitBeerComment, submitBarComment,  ...other }: CommentFormProps) => {
    const onSubmit = ({ comment }: SubmitCommentVariables, { resetForm }: FormikActions<SubmitCommentVariables>) => {
        if (submitBeerComment) {
            submitBeerComment({ variables: { beerId: id, comment } }).then(() => resetForm());
        }

        if (submitBarComment) {
            submitBarComment({ variables: { barId: id, comment } }).then(() => resetForm());
        }
    };

    return (
        <Formik
            {...other}
            initialValues={{ comment: '' }}
            onSubmit={onSubmit}
            render={renderCommentForm}
        />
    );
};

export default CommentForm;
