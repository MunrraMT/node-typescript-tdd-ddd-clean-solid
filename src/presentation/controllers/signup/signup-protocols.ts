import { IController, IHttpRequest, IHttpResponse } from '../../protocols';
import IEmailValidator from '../../protocols/interface-email-validator';
import { IAddAccount, IAddAccountModel } from '~/domain/use-cases/add-account';
import EmailValidatorStub from '../../stubs/email-validator-stub';
import AddAccountStub from '../../stubs/add-account-stub';

export {
  AddAccountStub,
  EmailValidatorStub,
  IAddAccount,
  IAddAccountModel,
  IController,
  IEmailValidator,
  IHttpRequest,
  IHttpResponse,
};
