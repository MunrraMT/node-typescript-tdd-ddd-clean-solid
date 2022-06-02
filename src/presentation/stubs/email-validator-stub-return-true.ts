import IEmailValidator from '../protocols/iemail-validator';

class EmailValidatorStubTrue implements IEmailValidator {
  isValid(email: string): boolean {
    return true;
  }
}

export default EmailValidatorStubTrue;
