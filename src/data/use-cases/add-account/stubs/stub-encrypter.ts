import { InterfaceEncrypter } from '../db-add-account-protocols';

const makeEncrypter = (): InterfaceEncrypter => {
  class StubEncrypter implements InterfaceEncrypter {
    async encrypt(value: string): Promise<string> {
      return Promise.resolve('hashed_password');
    }
  }

  return new StubEncrypter();
};

export default makeEncrypter;
