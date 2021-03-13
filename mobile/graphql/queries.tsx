import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      description
      brand {
        id
        name
      }
      category {
        id
        name
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: String!) {
    products(id: $id) {
      id
      name
      description
      brand {
        id
        name
      }
      category {
        id
        name
      }
    }
  }
`;
