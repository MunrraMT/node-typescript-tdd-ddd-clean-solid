import { IHttpRequest, IHttpResponse } from '../protocols/http';
import MissingParamError from '../erros/missin-param-error';
import badRequest from '../helpers/http-helper';
import IController from '../protocols/icontroller';
import IEmailValidator from '../protocols/iemail-validator';
import InvalidParamError from '../erros/invalid-param-error';

class SignUpController implements IController {
  private readonly emailValidator;

  constructor(emailValidator: IEmailValidator) {
    this.emailValidator = emailValidator;
  }

  handle(httpRequest: IHttpRequest): IHttpResponse {
    const requeridFields = [
      'name',
      'email',
      'password',
      'passwordConfirmation',
    ];
    for (const field of requeridFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const isValidEmail = this.emailValidator.isValid(httpRequest.body.email);
    if (!isValidEmail) return badRequest(new InvalidParamError('email'));

    return { statusCode: 200, body: '' };
  }
}

export default SignUpController;
