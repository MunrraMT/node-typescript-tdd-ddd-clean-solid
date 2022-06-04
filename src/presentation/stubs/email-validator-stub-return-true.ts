import { IEmailValidator } from '../protocols';

class EmailValidatorStubTrue implements IEmailValidator {
  isValid(email: string): boolean {
    return true;
  }
}

export default EmailValidatorStubTrue;
