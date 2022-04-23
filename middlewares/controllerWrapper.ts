export { };
import { Request, Response, NextFunction } from "express";
const controllerWrapper = (controller:any) => {
  return async (req:Request, res:Response, next:NextFunction) => {
    try {
      await controller(req, res, next)
    } catch (error) {
      next(error)
    }
  }
};

module.exports = controllerWrapper;
