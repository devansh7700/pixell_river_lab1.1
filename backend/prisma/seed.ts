import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const finance = await prisma.department.create({
    data: { name: "Finance" },
  });

  const it = await prisma.department.create({
    data: { name: "IT" },
  });

  const marketing = await prisma.department.create({
    data: { name: "Marketing" },
  });

  await prisma.employee.createMany({
    data: [
      { firstName: "John", departmentId: finance.id },
      { firstName: "Emily", departmentId: finance.id },
      { firstName: "David", departmentId: it.id },
    ],
  });

  await prisma.role.createMany({
    data: [
      { name: "Jo-Anne Sinclair", title: "CEO/Chair of Board" },
      { name: "Jackson Smith", title: "COO/VP Operations" },
    ],
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());