import IEmailValidator from '../protocols/interface-email-validator';

class EmailValidatorStub implements IEmailValidator {
  isValid(email: string): boolean {
    return true;
  }
}

export default EmailValidatorStub;
