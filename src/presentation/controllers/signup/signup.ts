import {
  IAddAccount,
  IController,
  IEmailValidator,
  IHttpRequest,
  IHttpResponse,
} from './signup-protocols';
import { InvalidParamError, MissingParamError } from '~/presentation/errors';
import {
  badRequest,
  serverError,
  serverOk,
} from '~/presentation/helpers/http-helper';

class SignUpController implements IController {
  private readonly emailValidator;

  private readonly addAccount;

  constructor(emailValidator: IEmailValidator, addAccount: IAddAccount) {
    this.emailValidator = emailValidator;
    this.addAccount = addAccount;
  }

  handle(httpRequest: IHttpRequest): IHttpResponse {
    try {
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

      const { name, email, password, passwordConfirmation } = httpRequest.body;

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'));
      }

      const isValidEmail = this.emailValidator.isValid(email);
      if (!isValidEmail) return badRequest(new InvalidParamError('email'));

      const account = this.addAccount.add({
        name,
        email,
        password,
      });

      return serverOk(account);
    } catch (error) {
      return serverError();
    }
  }
}

export default SignUpController;
