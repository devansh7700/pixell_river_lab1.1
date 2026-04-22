import Department from "../components/department/Department";
import AddEmployeeForm from "../components/AddEmployeeForm";
import { useQuery } from "@tanstack/react-query";
import {employeeRepo} from "../repositories/employeeRepo";
import type { Department as DepartmentType } from "../interfaces/Department";

function Employees() {
  const {
    data: departments = [],
    isLoading,
    error,
    refetch,
  } = useQuery<DepartmentType[]>({
    queryKey: ["departments"],
    queryFn: employeeRepo.getDepartments,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading employees</p>;

  console.log(departments);
  
  return (
    <>
      {departments.map((dept) => (
        <Department key={dept.name} department={dept} />
      ))}

      <AddEmployeeForm departments={departments} onEmployeeAdded={refetch}/>
    </>
  );
}



export default Employees;