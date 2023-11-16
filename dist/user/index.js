"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_azure_functions_1 = require("apollo-server-azure-functions");
const graphql_scalars_1 = require("graphql-scalars");
const context_1 = require("../context");
const user_1 = require("../queries/user");
const user_2 = require("../mutations/user");
const typeDefs = (0, apollo_server_azure_functions_1.gql) `
  type Query {
    allUsers: [User]
    userById(id: Int!): User
  }

  type Mutation {
    createUser(data: UserCreateInput!): User
  }

  type User {
    id: Int!
    firstName: String
    lastName: String
    email: String!
  }

  input UserCreateInput {
    firstName: String
    lastName: String
    email: String!
  }

  scalar DateTime
`;
const resolvers = {
    Query: {
        allUsers: user_1.allUsers,
        userById: user_1.userById,
    },
    Mutation: {
        createUser: user_2.createUser,
    },
    DateTime: graphql_scalars_1.DateTimeResolver,
};
const server = new apollo_server_azure_functions_1.ApolloServer({
    typeDefs,
    resolvers,
    context: context_1.context,
    playground: true,
});
exports.default = server.createHandler({
    cors: { origin: "*", credentials: true },
});
//# sourceMappingURL=index.js.map