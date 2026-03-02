import Department from "../components/department/Department";
import AddEmployeeForm from "../components/AddEmployeeForm";
import { useEffect, useState } from "react";
import {employeeRepo} from "../repositories/employeeRepo";
import type { Department as DepartmentType } from "../interfaces/Department";

function Employees() {
  const [departments, setDepartments] = useState<DepartmentType[]>([]);

  
  const loadDepartments = () => {
    setDepartments(employeeRepo.getDepartments());
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  return (
    <>
      {departments.map((dept) => (
        <Department key={dept.name} department={dept} />
      ))}

      <AddEmployeeForm onEmployeeAdded={loadDepartments} />
    </>
  );
}

export default Employees;