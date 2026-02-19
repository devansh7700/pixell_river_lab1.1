import Department from "../components/department/Department";
import AddEmployeeForm from "../components/AddEmployeeForm";
import { useState } from "react";
import { departments as initialDepartments } from "../data/employees";
import type { Department as DepartmentType } from "../interfaces/Department";

function Employees() {
  const [departments, setDepartments] = useState<DepartmentType[]>(
    initialDepartments
  );

  return (
    <>
      {departments.map((dept) => (
        <Department key={dept.name} department={dept} />
      ))}

      <AddEmployeeForm
        departments={departments}
        setDepartments={setDepartments}
      />
    </>
  );
}

export default Employees;
