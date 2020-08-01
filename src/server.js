import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
  type Query {
    hello(name: String!): String!
    test(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name}`,
    test: (_, { name }) => `Testing graphQL with ${name || "a user"}`,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
