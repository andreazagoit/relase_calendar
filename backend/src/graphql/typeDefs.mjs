import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    products(id: String): [Product!]!
    brands: [Brand!]!
    categories: [Category!]!
    users: [User!]!
  }

  type Mutation {
    addProduct(
      id: ID!
      name: String!
      description: String!
      brand: ID!
      category: ID!
    ): Product!
    addUser(username: String!, password: String!): User!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    brand: Brand!
    category: Category!
  }

  type Brand {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type User {
    id: ID!
    username: String!
    password: String!
  }
`;
