import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getEmployees() {
  return prisma.department.findMany({
    include: {
      employees: true,
    },
  });
}

export async function createEmployee(
  firstName: string,
  department: string
): Promise<{ success?: boolean; error?: string }> {
  const dep = await prisma.department.findUnique({
    where: {
      name: department,
    },
  });

  if (!dep) {
    return { error: "Department not found" };
  }

  await prisma.employee.create({
    data: {
      firstName,
      departmentId: dep.id,
    },
  });

  return { success: true };
}