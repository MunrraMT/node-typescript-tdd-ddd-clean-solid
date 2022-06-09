import { InterfaceEncrypter } from './db-add-account-protocols';
import DbAddAccount from './db-add-account';

type SutTypes = {
  sut: DbAddAccount;
  stubEncrypter: InterfaceEncrypter;
};

const makeEncrypter = (): InterfaceEncrypter => {
  class StubEncrypter implements InterfaceEncrypter {
    async encrypt(value: string): Promise<string> {
      return Promise.resolve('hashed_password');
    }
  }

  return new StubEncrypter();
};

const makeSut = (): SutTypes => {
  const stubEncrypter = makeEncrypter();
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

  test('Should throw if Encrypter throws', async () => {
    const { stubEncrypter, sut } = makeSut();
    jest
      .spyOn(stubEncrypter, 'encrypt')
      .mockReturnValueOnce(Promise.reject(new Error()));
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password',
    };
    const promise = sut.add(accountData);
    await expect(promise).rejects.toThrow();
  });
});
