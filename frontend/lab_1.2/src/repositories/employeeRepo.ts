import type { Department } from "../interfaces/Department";
import type { Employee } from "../interfaces/Employee";

const API_URL = "http://localhost:3000/employees";

export const employeeRepo = {
  async getDepartments(): Promise<Department[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch departments");
    }

    return await response.json();
  },

  async createEmployee(
    employee: Employee,
    departmentName: string
  ): Promise<{ success?: boolean; error?: string }> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: employee.firstName,
        department: departmentName,
      }),
    });

    return await response.json();
  },
};