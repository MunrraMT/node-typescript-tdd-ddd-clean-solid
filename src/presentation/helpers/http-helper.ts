import { ServerError } from '../errors';
import { IHttpResponse } from '../protocols';

const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 400,
  body: error,
});

const serverError = (): IHttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});

export { badRequest, serverError };
