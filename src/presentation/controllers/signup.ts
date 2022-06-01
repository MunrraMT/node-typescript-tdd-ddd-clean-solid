import { HttpRequest, HttpResponse } from "../protocols/http";
import MissingParamError from "../erros/missin-param-error";

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.email) {
      return { statusCode: 400, body: new MissingParamError("email") };
    }

    return { statusCode: 400, body: new MissingParamError("name") };
  }
}

export default SignUpController;
