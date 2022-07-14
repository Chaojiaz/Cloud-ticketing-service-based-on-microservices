import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
  //means not authorized or forbidden from access this.
  statusCode = 401;


  constructor() {
    super('Not authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serializeErrors() {
    return [{ message: 'Not authorized' }];
  }
}