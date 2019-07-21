import gql from 'graphql-tag';

export const OPEN_FORM_MUTATION = gql`
  mutation OpenForm($noArg: Boolean) {
    openForm(noArg: $noArg) @client
  }
`;

export const CLOSE_FORM_MUTATION = gql`
  mutation CloseForm($noArg: Boolean) {
    closeForm(noArg: $noArg) @client
  }
`;

export const SEARCH_BAR_MUTATION = gql`
  mutation SearchBar($barForm: BarFormInput) {
    searchBar(barForm: $barForm) @client
  }
`;