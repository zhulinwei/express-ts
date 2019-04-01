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
  constructor (error: HttpError, res: Request, req: Response) {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong'; 
    res.status(status).send({ status, message });
  } 
}

export { HttpError, ErrorHandler }
