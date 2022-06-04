import { IEmailValidator } from '../protocols';

class EmailValidatorStub implements IEmailValidator {
  isValid(email: string): boolean {
    return true;
  }
}

export default EmailValidatorStub;
