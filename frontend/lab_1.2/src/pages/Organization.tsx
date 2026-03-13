import { organization } from "../data/organization";
import type { Role } from "../interfaces/Role";

function Organization() {
  return (
    <section>
      <h2>Leadership and Management</h2>

      {organization.map((person: Role, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            {person.firstName} {person.lastName}
          </span>
          <span>{person.title}</span>
        </div>
      ))}
    </section>
  );
}

export default Organization;
