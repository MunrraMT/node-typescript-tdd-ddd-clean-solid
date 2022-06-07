import InterfaceEncrypter from '~/data/protocols/interface-encrypter';
import DbAddAccount from './db-add-account';

type SutTypes = {
  sut: DbAddAccount;
  stubEncrypter: InterfaceEncrypter;
};

const makeSut = (): SutTypes => {
  class StubEncrypter {
    async encrypt(value: string): Promise<string> {
      return Promise.resolve('hashed_password');
    }
  }
  const stubEncrypter = new StubEncrypter();
  const sut = new DbAddAccount(stubEncrypter);

  return {
    sut,
    stubEncrypter,
  };
};

describe('DbAddAccount UseCase', () => {
  test('Should call Encrypter with correct password', async () => {
    const { stubEncrypter, sut } = makeSut();
    const encryptSpy = jest.spyOn(stubEncrypter, 'encrypt');
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password',
    };

    await sut.add(accountData);

    expect(encryptSpy).toHaveBeenCalledWith('valid_password');
  });
});
