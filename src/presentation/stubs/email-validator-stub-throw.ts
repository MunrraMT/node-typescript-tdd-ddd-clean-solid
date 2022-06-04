import { IEmailValidator } from '../protocols';

class EmailValidatorStubThrow implements IEmailValidator {
  isValid(email: string): boolean {
    throw new Error();
  }
}

export default EmailValidatorStubThrow;
