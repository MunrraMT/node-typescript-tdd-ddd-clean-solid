import { IHttpRequest, IHttpResponse } from './interface-http';

interface IController {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}

export default IController;
