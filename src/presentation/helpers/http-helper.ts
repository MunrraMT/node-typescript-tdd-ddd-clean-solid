import { ServerError } from '../errors';
import { InterfaceHttpResponse } from '../protocols';

const badRequest = (error: Error): InterfaceHttpResponse => ({
  statusCode: 400,
  body: error,
});

const serverError = (): InterfaceHttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});

const serverOk = (data: any): InterfaceHttpResponse => ({
  statusCode: 200,
  body: data,
});

export { badRequest, serverError, serverOk };
