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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const test1 = yield prisma.user.upsert({
            where: { email: "test_1@prisma.io" },
            update: {},
            create: {
                email: "test_1@prisma.io",
                firstName: "test1_first",
                lastName: "test1_last",
            },
        });
        const test2 = yield prisma.user.upsert({
            where: { email: "test_2@prisma.io" },
            update: {},
            create: {
                email: "test_2@prisma.io",
                firstName: "test2_first",
                lastName: "test2_last",
            },
        });
        const test3 = yield prisma.user.upsert({
            where: { email: "test_3@prisma.io" },
            update: {},
            create: {
                email: "test_3@prisma.io",
                firstName: "test3_first",
                lastName: "test3_last",
            },
        });
        const test4 = yield prisma.user.upsert({
            where: { email: "test_4@prisma.io" },
            update: {},
            create: {
                email: "test_4@prisma.io",
                firstName: "test4_first",
                lastName: "test4_last",
            },
        });
        console.log({ test1, test2, test3, test4 });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
//# sourceMappingURL=seed.js.map