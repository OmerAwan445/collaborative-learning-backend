import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '@utils/helpers/ErrorHandler';
import { AppError } from '@utils/errors/AppError';
import { CustomError } from '~types/error.types';

export const errorMiddleware = (err: CustomError | AppError, _: Request, res: Response, __: NextFunction) => { // eslint-disable-line
  const errorHandler = new ErrorHandler(res, err);
  return errorHandler.handleError();
};
