import InterfaceEmailValidator from '../protocols/interface-email-validator';

class StubEmailValidator implements InterfaceEmailValidator {
  isValid(email: string): boolean {
    return true;
  }
}

export default StubEmailValidator;
