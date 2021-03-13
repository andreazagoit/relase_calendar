import { products, brands, categories, users } from "../db.mjs";
import { User } from "../schema/User.mjs";

export const resolvers = {
  Query: {
    products(parent, args, context, info) {
      const { id } = args;
      if (id) {
        return products.filter((item) => id === item.id);
      }
      return products;
    },
    brands: () => brands,
    categories: () => categories,
    users: () => User.find({}),
  },
  Mutation: {
    addProduct(parent, args, context, info) {
      const { id, name, description, brand, category } = args;
      const product = { ...args };
      products.push(product);
      return product;
    },
    addUser(parent, args, context, info) {
      const { username, password } = args;
      const newUser = new User({ username, password });
      newUser.save().then((user) => console.log("Inserito"));
      return newUser;
    },
  },
  Product: {
    brand(parent, args, context, info) {
      return brands.find((item) => parent.brand === item.id);
    },
    category(parent, args, context, info) {
      return categories.find((item) => parent.category === item.id);
    },
  },
  Brand: {
    products(parent, args, context, info) {
      return products.filter((item) => parent.id === item.brand);
    },
  },
  Category: {
    products(parent, args, context, info) {
      return products.filter((item) => parent.id === item.category);
    },
  },
};
