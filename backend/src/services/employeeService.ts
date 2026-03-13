import * as repo from "../repositories/employeeRepository";

export function getEmployees() {
  return repo.getEmployees();
}

export function createEmployee(firstName: string, department: string) {
  if (!department) {
    return { error: "Department must be selected" };
  }

  if (firstName.trim().length < 3) {
    return { error: "First name must be at least 3 characters" };
  }

  return repo.createEmployee(firstName, department);
}