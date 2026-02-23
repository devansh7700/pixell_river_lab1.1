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

    // Clear previous errors
    firstName.setError("");
    department.setError("");

    const result = employeeService.createEmployee(
      firstName.value,
      department.value
    );

    if (result.error) {
      firstName.setError(result.error);
      return;
    }

    // If success
    if (result.data) {
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
        onChange={(e) => firstName.setValue(e.target.value)}
        placeholder="First Name"
      />

      <select
        value={department.value}
        onChange={(e) => department.setValue(e.target.value)}
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
