import { departments } from "../data/employee";

export function getEmployees() {
  return departments;
}

export function createEmployee(firstName: string, department: string) {
  const dep = departments.find(d => d.name === department);

  if (!dep) {
    return { error: "Department not found" };
  }

  dep.employees.push({ firstName });

  return { success: true };
}