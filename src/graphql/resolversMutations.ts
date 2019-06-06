import gql from 'graphql-tag';

export const OPEN_FORM_MUTATION = gql`
  mutation {
    openForm @client
  }
`;

export const CLOSE_FORM_MUTATION = gql`
  mutation {
    closeForm @client
  }
`;