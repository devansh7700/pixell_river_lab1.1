import Department from "../components/department/Department";
import AddEmployeeForm from "../components/AddEmployeeForm";
import { useEffect, useState } from "react";
import {employeeRepo} from "../repositories/employeeRepo";
import type { Department as DepartmentType } from "../interfaces/Department";

function Employees() {
  const [departments, setDepartments] = useState<DepartmentType[]>([]);

  
  // Load departments from repository when page loads
  useEffect(() => {
    const data = employeeRepo.getDepartments();
    setDepartments(data);
  }, []);

  const refreshDepartments = () => {
    const data = employeeRepo.getDepartments();
    setDepartments(data);
  };

  return (
    <>
      {departments.map((dept) => (
        <Department key={dept.name} department={dept} />
      ))}

      <AddEmployeeForm onEmployeeAdded={refreshDepartments} />
    </>
  );
}

export default Employees;
