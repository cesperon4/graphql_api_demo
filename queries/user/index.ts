import { Context } from "../../context";
import { UserInputError } from "apollo-server-azure-functions";

export async function allUsers(_parent, _args, context: Context) {
  try {
    const allUsers = await context.prisma.user.findMany({
      orderBy: { id: "asc" },
    });
    return allUsers;
  } catch (err) {
    console.log(err);
    throw new UserInputError("Bad Request", { errors: err });
  }
}

export async function userById(
  _parent,
  _args: { id: number },
  context: Context
) {
  try {
    const user = await context.prisma.user.findUnique({
      where: { id: _args.id },
    });
    return user;
  } catch (err) {
    console.log(err);
    throw new UserInputError("Bad Request", { errors: err });
  }
}
