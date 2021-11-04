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
  query getSingleProduct ($slug: String, $channel: String = "default") {
    product(slug: $slug, channel: $channel) {
      description
      seoDescription
      isAvailable
      metadata {
        key,
        value
      }
      defaultVariant {
        id
      },
      pricing {
        onSale,
        discount {
          net {
            amount
            currency
          }
          gross {
            amount
            currency
          }
        }
        priceRange {
          start {
            net {
              amount
              currency
            }
            tax {
              amount
              currency
            }
            gross {
              amount
              currency
            }
          }
          stop {
            net {
              amount
              currency
            }
            gross {
              amount
              currency
            }
          }
        }
      }
      variants {
        id,
        name
        metadata {
          value
          key
        }
        quantityAvailable,
        images {
          url,
          id,
          alt
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
