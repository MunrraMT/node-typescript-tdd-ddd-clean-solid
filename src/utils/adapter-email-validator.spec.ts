import AdapterEmailValidator from './adapter-email-validator';

describe('AdapterEmailValidator', () => {
  test('Should returns false if validator returns false', () => {
    const sut = new AdapterEmailValidator();
    const isValid = sut.isValid('invalid_email@mail.com');
    expect(isValid).toBe(false);
  });
});
