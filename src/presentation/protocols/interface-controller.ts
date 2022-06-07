import { IHttpRequest, IHttpResponse } from './interface-http';

interface InterfaceController {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}

export default InterfaceController;
