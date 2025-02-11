import { Request, Response, NextFunction } from "express";

export function catchAsyncError(fn:(req:Request, res:Response, next:NextFunction) => Promise<unknown> ) {
  return (req:Request, res:Response, next:NextFunction) => {
    fn(req, res, next).catch(next);
  };
}
