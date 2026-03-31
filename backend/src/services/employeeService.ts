import * as repo from "../repositories/employeeRepository";

export async function getEmployees() {
  return await repo.getEmployees();
}

export async function createEmployee(
  firstName: string,
  department: string
): Promise<{ success?: boolean; error?: string }> {
  if (!department) {
    return { error: "Department must be selected" };
  }

  if (firstName.trim().length < 3) {
    return { error: "First name must be at least 3 characters" };
  }

  return await repo.createEmployee(firstName, department);
}