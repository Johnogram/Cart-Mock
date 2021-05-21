import { NextFunction, Request, Response } from 'express';

export const customerCart = (_request: Request, response: Response, next: NextFunction): void => {
  try {
    response.status(200).send();
  } catch (err) {
    next(err);
  }
};
