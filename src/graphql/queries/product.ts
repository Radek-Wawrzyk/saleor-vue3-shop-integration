import gql from 'graphql-tag';

const getProducts = gql`
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

const getSingleProduct = gql`
  query getSingleProduct ($slug: String) {
    product(slug: $slug) {
      description,
      descriptionJson,
      isAvailable
      defaultVariant {
        id
      },
      pricing {
        onSale,
        priceRange {
          start {
            net {
              amount
            }
            gross {
              amount
            }
          }
          stop {
            net {
              amount
            }
            gross {
              amount
            }
          }
        }
      }
      variants {
        id,
        name
        images {
          url,
          id,
          alt,
          sortOrder
        }
      }
      name,
      id,
      images {
        url,
        alt,
        id,
        sortOrder
      }
    }
  }
`;

export {
  getSingleProduct,
  getProducts
};
