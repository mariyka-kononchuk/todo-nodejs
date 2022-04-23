export { };
import { Request, Response, NextFunction } from "express";
const validation = (scheme:any) => {
  return (req:Request, res:Response, next:NextFunction) => {
    const { error } = scheme.validate(req.body)
    if (error) {
      error.status = 400
      next(error)
      return
    }
    next()
  }
};

module.exports = validation;
