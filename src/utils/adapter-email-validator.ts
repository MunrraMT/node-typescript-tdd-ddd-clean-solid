import InterfaceEmailValidator from '~/presentation/protocols/interface-email-validator';

class AdapterEmailValidator implements InterfaceEmailValidator {
  isValid(email: any): boolean {
    return false;
  }
}

export default AdapterEmailValidator;
