import validator from 'validator';

import InterfaceEmailValidator from '~/presentation/protocols/interface-email-validator';

class AdapterEmailValidator implements InterfaceEmailValidator {
  isValid(email: string): boolean {
    const isValid = validator.isEmail(email);

    return isValid;
  }
}

export default AdapterEmailValidator;
