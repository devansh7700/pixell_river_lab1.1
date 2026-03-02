import { departments as initialDepartments } from "../data/employees";
import type { Department } from "../interfaces/Department";
import type { Employee } from "../interfaces/Employee";

let departments: Department[] = [...initialDepartments];

export const employeeRepo = {
  getDepartments(): Department[] {
    return departments;
  },

  createEmployee(employee: Employee, departmentName: string): void {
    departments = departments.map((dep) =>
      dep.name === departmentName
        ? { ...dep, employees: [...dep.employees, employee] }
        : dep
    );
  },
};
