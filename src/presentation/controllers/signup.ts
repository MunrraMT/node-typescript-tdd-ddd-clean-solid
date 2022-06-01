import { HttpRequest, HttpResponse } from "../protocols/http";

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.email) {
      return { statusCode: 400, body: new Error("Missing param: email") };
    }

    return { statusCode: 400, body: new Error("Missing param: name") };
  }
}

export default SignUpController;
