import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./graphql/typeDefs.mjs";
import { resolvers } from "./graphql/resolvers.mjs";
import mongoose from "mongoose";

const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });

const app = express();
server.applyMiddleware({ app });

mongoose
  .connect(
    "mongodb+srv://admin:ONgbzTXY77MMzGDe@cluster0.mdgmx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("Connected to MongoDB"));

app.listen({ port: 4000 }, () =>
  console.log("Now browse to http://localhost:4000" + server.graphqlPath)
);
