import { employeeRepo } from "../repositories/employeeRepo";
import type { Employee } from "../interfaces/Employee";

export const employeeService = {
  createEmployee(firstName: string, departmentName: string) {
    if (!departmentName) {
      return { error: "Department must be selected." };
    }

    if (firstName.trim().length < 3) {
      return { error: "First name must be at least 3 characters." };
    }

    const departments = employeeRepo.getDepartments();
    const departmentExists = departments.some(
      (dep) => dep.name === departmentName
    );

    if (!departmentExists) {
      return { error: "Department does not exist." };
    }

    const newEmployee: Employee = { firstName };

    const updatedDepartments = employeeRepo.createEmployee(
      newEmployee,
      departmentName
    );

    return { data: updatedDepartments };
  },
};
