import { Request, Response } from "express";
import * as employeeService from "../services/employeeService";

export async function getEmployees(
  req: Request,
  res: Response
) {
  const employees = await employeeService.getEmployees();
  res.json(employees);
}

export async function createEmployee(
  req: Request,
  res: Response
) {
  const { firstName, department } = req.body;

  const result = await employeeService.createEmployee(
    firstName,
    department
  );

  if (result.error) {
    return res.status(400).json(result);
  }

  return res.status(201).json(result);
}