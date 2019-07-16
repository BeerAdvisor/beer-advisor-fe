/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CommentBar
// ====================================================

export interface CommentBar_commentBar {
  __typename: "BarComment";
  id: string;
}

export interface CommentBar {
  commentBar: CommentBar_commentBar;
}

export interface CommentBarVariables {
  barId: string;
  comment: string;
}
