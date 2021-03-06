import {
  InterfaceAddAccount,
  InterfaceController,
  InterfaceEmailValidator,
  InterfaceHttpRequest,
  InterfaceHttpResponse,
} from './signup-protocols';
import { InvalidParamError, MissingParamError } from '~/presentation/errors';
import {
  badRequest,
  serverError,
  serverOk,
} from '~/presentation/helpers/http-helper';

class SignUpController implements InterfaceController {
  private readonly emailValidator;

  private readonly addAccount;

  constructor(
    emailValidator: InterfaceEmailValidator,
    addAccount: InterfaceAddAccount
  ) {
    this.emailValidator = emailValidator;
    this.addAccount = addAccount;
  }

  async handle(
    httpRequest: InterfaceHttpRequest
  ): Promise<InterfaceHttpResponse> {
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

      const account = await this.addAccount.add({
        name,
        email,
        password,
      });

      return serverOk(account);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}

export default SignUpController;
