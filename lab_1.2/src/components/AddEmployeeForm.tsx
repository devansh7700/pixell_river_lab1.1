import { useState } from "react";
import type { Employee } from "../interfaces/Employee";
import type { Department } from "../interfaces/Department";

interface Props {
  departments: Department[];
  setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}

function AddEmployeeForm({ departments, setDepartments }: Props) {
  const [firstName, setFirstName] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (firstName.trim().length < 3) {
      setError("First name must be at least 3 characters.");
      return;
    }

    if (!departmentName) {
      setError("Please select a department.");
      return;
    }

    const newEmployee: Employee = { firstName };

    setDepartments((prev) =>
      prev.map((dep) =>
        dep.name === departmentName
          ? { ...dep, employees: [...dep.employees, newEmployee] }
          : dep
      )
    );

    setFirstName("");
    setDepartmentName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      {error && <p>{error}</p>}

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <select
        value={departmentName}
        onChange={(e) => setDepartmentName(e.target.value)}
      >
        <option value="">Select Department</option>
        {departments.map((dep) => (
          <option key={dep.name} value={dep.name}>
            {dep.name}
          </option>
        ))}
      </select>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployeeForm;
