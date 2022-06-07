import {
  InterfaceController,
  InterfaceHttpRequest,
  InterfaceHttpResponse,
} from '../../protocols';
import InterfaceEmailValidator from '../../protocols/interface-email-validator';
import {
  InterfaceAddAccount,
  InterfaceAddAccountModel,
} from '~/domain/use-cases/interface-add-account';
import StubEmailValidator from '../../stubs/email-validator-stub';
import StubAddAccount from '../../stubs/add-account-stub';

export {
  StubAddAccount,
  StubEmailValidator,
  InterfaceAddAccount,
  InterfaceAddAccountModel,
  InterfaceController,
  InterfaceEmailValidator,
  InterfaceHttpRequest,
  InterfaceHttpResponse,
};
