import { NextFunction, Request, Response } from 'express';

class HttpError extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

class ErrorHandler {
  serverErrorHandle (error: HttpError,  req: Request, res: Response, next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong'; 
    res.status(status).send({ status, message });
  } 

  httpErrorHandle (req: Request, res: Response, next: NextFunction) {
    const status = 404;
    const message = 'can not found';
    res.status(status).send({ status, message });
  }
}

export { HttpError, ErrorHandler }
