import IEmailValidator from '../protocols/iemail-validator';

class EmailValidatorStub implements IEmailValidator {
  isValid(email: string): boolean {
    return true;
  }
}

export default EmailValidatorStub;
