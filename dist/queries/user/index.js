"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userById = exports.allUsers = void 0;
const apollo_server_azure_functions_1 = require("apollo-server-azure-functions");
function allUsers(_parent, _args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allUsers = yield context.prisma.user.findMany({
                orderBy: { id: "asc" },
            });
            return allUsers;
        }
        catch (err) {
            console.log(err);
            throw new apollo_server_azure_functions_1.UserInputError("Bad Request", { errors: err });
        }
    });
}
exports.allUsers = allUsers;
function userById(_parent, _args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield context.prisma.user.findUnique({
                where: { id: _args.id },
            });
            return user;
        }
        catch (err) {
            console.log(err);
            throw new apollo_server_azure_functions_1.UserInputError("Bad Request", { errors: err });
        }
    });
}
exports.userById = userById;
//# sourceMappingURL=index.js.map