import gql from 'graphql-tag';

export const getProducts = gql`
  query getProducts ($first: Int) {
    products(first: $first) {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`;
