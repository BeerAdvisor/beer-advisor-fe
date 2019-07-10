import React from 'react';
import { Formik, FormikProps, Field } from 'formik';
import { MutationFn } from 'react-apollo';

import { FormixInputField } from '../../components/formix';

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

interface SubmitCommentVariables {
    comment: string;
}

export type CommentMutationVaraibles = {
    beerId: string;
} & SubmitCommentVariables;

export interface CommentFormProps {
    submitComment: MutationFn<any, CommentMutationVaraibles>;
    id: string;
}

const CommentForm = ({ id, submitComment, ...other }: CommentFormProps) => {
    const onSubmit = ({ comment }: SubmitCommentVariables) => {
        submitComment({ variables: { beerId: id, comment } });
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
