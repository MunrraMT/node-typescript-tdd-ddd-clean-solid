import { HttpRequest, HttpResponse } from "../protocols/http";
import MissingParamError from "../erros/missin-param-error";
import badRequest from "../helpers/http-helper";

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError("email"));
    }

    return badRequest(new MissingParamError("name"));
  }
}

export default SignUpController;
