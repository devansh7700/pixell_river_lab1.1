export const roleRepo = {

  async getRoles() {
    const response = await fetch("http://localhost:3000/roles");
    return response.json();
  }

};