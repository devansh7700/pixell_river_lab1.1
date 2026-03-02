import { useFormInput } from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";
import { employeeRepo } from "../repositories/employeeRepo";

interface Props {
  onEmployeeAdded: () => void;
}

function AddEmployeeForm({ onEmployeeAdded }: Props) {
  const firstName = useFormInput("");
  const department = useFormInput("");

  const departments = employeeRepo.getDepartments();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const result = employeeService.createEmployee(
      firstName.value,
      department.value
    );

    if (result.error) {
      firstName.validate(() => result.error);
      return;
    }

    // If success
    if (result.success) {
      onEmployeeAdded(); // Refresh page data
      firstName.reset();
      department.reset();
    }
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
