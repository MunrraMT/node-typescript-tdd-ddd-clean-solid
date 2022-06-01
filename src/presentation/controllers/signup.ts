import { HttpRequest, HttpResponse } from "../protocols/http";
import MissingParamError from "../erros/missin-param-error";
import badRequest from "../helpers/http-helper";

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requeridFields = ["name", "email", "password"];
    for (const field of requeridFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    return badRequest(new MissingParamError("field"));
  }
}

export default SignUpController;
