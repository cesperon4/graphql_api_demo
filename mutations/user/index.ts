import { Context } from "../../context";
import { UserInputError } from "apollo-server-azure-functions";
import { UserCreateInput } from "../../types/user.interface";

export async function createUser(
  _parents,
  _args: { data: UserCreateInput },
  context: Context
) {
  try {
    const newUser = await context.prisma.user.create({
      data: {
        firstName: _args.data.firstName,
        lastName: _args.data.lastName,
        email: _args.data.email,
      },
    });

    return newUser;
  } catch (err) {
    console.log(err);
    throw new UserInputError("Bad Request", { errors: err });
  }
}
