import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  const test1 = await prisma.user.upsert({
    where: { email: "test_1@prisma.io" },
    update: {},
    create: {
      email: "test_1@prisma.io",
      firstName: "test1_first",
      lastName: "test1_last",
    },
  });
  const test2 = await prisma.user.upsert({
    where: { email: "test_2@prisma.io" },
    update: {},
    create: {
      email: "test_2@prisma.io",
      firstName: "test2_first",
      lastName: "test2_last",
    },
  });
  const test3 = await prisma.user.upsert({
    where: { email: "test_3@prisma.io" },
    update: {},
    create: {
      email: "test_3@prisma.io",
      firstName: "test3_first",
      lastName: "test3_last",
    },
  });
  const test4 = await prisma.user.upsert({
    where: { email: "test_4@prisma.io" },
    update: {},
    create: {
      email: "test_4@prisma.io",
      firstName: "test4_first",
      lastName: "test4_last",
    },
  });
  console.log({ test1, test2, test3, test4 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
