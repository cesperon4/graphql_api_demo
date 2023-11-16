import { ApolloServer, gql } from "apollo-server-azure-functions";
import { DateTimeResolver } from "graphql-scalars";
import { context } from "../context";
import { allUsers, userById } from "../queries/user";
import { createUser } from "../mutations/user";

const typeDefs = gql`
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
    allUsers,
    userById,
  },
  Mutation: {
    createUser,
  },
  DateTime: DateTimeResolver,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: context,
  playground: true,
});

export default server.createHandler({
  cors: { origin: "*", credentials: true },
});
