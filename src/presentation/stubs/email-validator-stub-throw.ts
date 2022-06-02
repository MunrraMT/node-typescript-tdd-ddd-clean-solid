import IEmailValidator from '../protocols/iemail-validator';

class EmailValidatorStubThrow implements IEmailValidator {
  isValid(email: string): boolean {
    throw new Error();
  }
}

export default EmailValidatorStubThrow;
