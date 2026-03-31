export const roleRepo = {
  async getRoles() {
    const response = await fetch("http://localhost:3000/roles");

    if (!response.ok) {
      throw new Error("Failed to fetch roles");
    }

    return await response.json();
  },
};