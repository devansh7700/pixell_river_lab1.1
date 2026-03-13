import { Request, Response } from "express";
import * as roleService from "../services/roleServices";

export function getRoles(req: Request, res: Response) {
  const roles = roleService.fetchRoles();
  res.json(roles);
}