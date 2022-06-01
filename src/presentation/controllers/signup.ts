class SignUpController {
  handle(httpRequest: any): any {
    if (!httpRequest.body.email) {
      return { statusCode: 400, body: new Error("Missing param: email") };
    }

    return { statusCode: 400, body: new Error("Missing param: name") };
  }
}

export default SignUpController;
