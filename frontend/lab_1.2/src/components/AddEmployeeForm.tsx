import { useFormInput } from "../hooks/useFormInput";
import { employeeRepo } from "../repositories/employeeRepo";
import type { Department } from "../interfaces/Department";

interface Props {
  departments: Department[];
  onEmployeeAdded: () => void;
}

function AddEmployeeForm({ departments, onEmployeeAdded }: Props) {
  const firstName = useFormInput("");
  const department = useFormInput("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    const result = await employeeRepo.createEmployee(
      {firstName: firstName.value},
      department.value
    );

    if (result.error) {
      firstName.validate(() => result.error);
      return;
    }
    
    onEmployeeAdded(); // Refresh page data
    firstName.reset();
    department.reset();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      {firstName.error && <p>{firstName.error}</p>}

      <input
        type="text"
        value={firstName.value}
        onChange={firstName.onChange}
        placeholder="First Name"
      />

      <select
        value={department.value}
        onChange={department.onChange}
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
