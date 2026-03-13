import * as roleRepo from "../repositories/roleRepository";

export function fetchRoles() {
  return roleRepo.getRoles();
}