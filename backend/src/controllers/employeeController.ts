import { Request, Response } from "express";
import * as employeeService from "../services/employeeService";

export function getEmployees(req: Request, res: Response) {
  const employees = employeeService.getEmployees();
  res.json(employees);
}

export function createEmployee(req: Request, res: Response) {
  const { firstName, department } = req.body;

  const result = employeeService.createEmployee(firstName, department);

  if (result.error) {
    return res.status(400).json(result);
  }

  res.json(result);
}