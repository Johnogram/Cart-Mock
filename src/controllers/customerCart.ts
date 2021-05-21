import { NextFunction, Request, Response } from 'express';
import { queryProducts } from '../helpers/queryProducts';

export const customerCart = async (_request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const products = await queryProducts();

    response.status(200).send(products.data);
  } catch (err) {
    next(err);
  }
};
