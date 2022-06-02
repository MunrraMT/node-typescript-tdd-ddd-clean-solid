import { IHttpResponse } from '../protocols/http';

const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 400,
  body: error,
});

export default badRequest;
