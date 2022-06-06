import { badRequest, serverError } from '../helpers/http-helper';
import { MissingParamError, InvalidParamError } from '../errors';
import {
  IController,
  IEmailValidator,
  IHttpRequest,
  IHttpResponse,
} from '../protocols';
import { IAddAccount } from '~/domain/use-cases/add-account';

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

      this.addAccount.add({
        name,
        email,
        password,
      });

      return { statusCode: 200, body: '' };
    } catch (error) {
      return serverError();
    }
  }
}

export default SignUpController;
