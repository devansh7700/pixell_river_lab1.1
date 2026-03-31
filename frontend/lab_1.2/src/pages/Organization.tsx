import { useEffect, useState } from "react";
import { roleRepo } from "../repositories/roleRepo";
import type { Role } from "../interfaces/Role";

function Organization() {
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    const loadRoles = async () => {
      try {
        const data = await roleRepo.getRoles();
        setRoles(data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    loadRoles();
  }, []);

  return (
    <section>
      <h2>Leadership and Management</h2>

      {roles.map((person, index) => (
        <div
          key={index}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>{person.name}</span>
          <span>{person.title}</span>
        </div>
      ))}
    </section>
  );
}

export default Organization;