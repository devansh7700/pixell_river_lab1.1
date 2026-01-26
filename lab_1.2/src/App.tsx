import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Department from "./components/department/Department";
import AddEmployeeForm from "./components/AddEmployeeform";

import { departments as initialDepartments } from "./data/employees";
import type { Department as DepartmentType } from "./interfaces/Department";
function App() {

  const [departments, setDepartments] = useState<DepartmentType[]>(
    initialDepartments
  );

  return (
    <>
      <Header />

      <main>
        {departments.map((dept) => (
          <Department key={dept.name} department={dept} />
        ))}

        <AddEmployeeForm
          departments={departments}
          setDepartments={setDepartments}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
