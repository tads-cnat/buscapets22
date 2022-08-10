import { NextFunction, Request, Response } from "express";

export default function parseLastLocation(request: Request,
  response: Response,
  next: NextFunction): void {
  const ltdlgdArray = JSON.parse(request.body.last_location)
  request.body.last_location = ltdlgdArray
  return next()
}