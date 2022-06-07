import validator from 'validator';

import AdapterEmailValidator from './adapter-email-validator';

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true;
  },
}));

describe('AdapterEmailValidator', () => {
  test('Should returns false if validator returns false', () => {
    const sut = new AdapterEmailValidator();
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false);
    const isValid = sut.isValid('invalid_email@mail.com');
    expect(isValid).toBe(false);
  });

  test('Should returns true if validator returns true', () => {
    const sut = new AdapterEmailValidator();
    const isValid = sut.isValid('valid_email@mail.com');
    expect(isValid).toBe(true);
  });

  test('Should call validator with correct email', () => {
    const sut = new AdapterEmailValidator();
    const isEmailSpy = jest.spyOn(validator, 'isEmail');
    sut.isValid('any_email@mail.com');
    expect(isEmailSpy).toBeCalledWith('any_email@mail.com');
  });
});
