import React from 'react';
import { Formik, FormikProps, Field, FormikActions } from 'formik';
import { MutationFn } from 'react-apollo';

import { FormixInputField } from '../../components/formix';
import { CommentBeerVariables } from '../../@types';

import { LimitedWidthButton } from './style';

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
    submitComment: MutationFn<any, CommentBeerVariables>;
    id: string;
}

const CommentForm = ({ id, submitComment,  ...other }: CommentFormProps) => {
    const onSubmit = ({ comment }: SubmitCommentVariables, { resetForm }: FormikActions<SubmitCommentVariables>) => {
        submitComment({ variables: { beerId: id, comment } }).then(() => resetForm());
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
