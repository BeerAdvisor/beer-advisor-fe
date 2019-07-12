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

export const SEARCH_BAR_MUTATION = gql`
  mutation SearchBar($barForm: BarForm) {
    searchBar(barForm: $barForm) @client
  }
`;