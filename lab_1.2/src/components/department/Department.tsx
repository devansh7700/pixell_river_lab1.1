import "./Department.css";
import type { Department as DepartmentType } from "../../interfaces/Department";

function Department({ department }: { department: DepartmentType }) {
  return (
    <section className="department">
      <h2>{department.name}</h2>
      {department.employees.map((emp, index) => (
        <p key={index}>
          {emp.firstName} {emp.lastName ?? ""}
        </p>
      ))}
    </section>
  );
}

export default Department;
