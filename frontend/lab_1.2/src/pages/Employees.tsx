import Department from "../components/department/Department";
import AddEmployeeForm from "../components/AddEmployeeForm";
import { useEffect, useState } from "react";
import {employeeRepo} from "../repositories/employeeRepo";
import type { Department as DepartmentType } from "../interfaces/Department";

function Employees() {
  const [departments, setDepartments] = useState<DepartmentType[]>([]);

  
  const loadDepartments = async() => {
    const data = await employeeRepo.getDepartments();
    setDepartments(data);
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  console.log(departments);
  
  return (
    <>
      {departments.map((dept) => (
        <Department key={dept.name} department={dept} />
      ))}

      <AddEmployeeForm departments={departments} onEmployeeAdded={loadDepartments}/>
    </>
  );
}



export default Employees;