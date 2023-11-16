import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  request: {
    req: {
      headers: {
        Authorization: string;
      };
    };
  };
}

export const context = (req): Context => {
  return { prisma, request: req };
};
