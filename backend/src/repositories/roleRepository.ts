import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getRoles() {
  return prisma.role.findMany();
}