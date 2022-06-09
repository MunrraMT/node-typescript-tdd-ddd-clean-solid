import {
  InterfaceAddAccountRepository,
  InterfaceEncrypter,
} from './db-add-account-protocols';
import DbAddAccount from './db-add-account';
import makeEncrypter from './stubs/stub-encrypter';
import makeAddAccountRepository from './stubs/stub-add-account-repository.ts';

type SutTypes = {
  sut: DbAddAccount;
  stubEncrypter: InterfaceEncrypter;
  stubAddAccountRepository: InterfaceAddAccountRepository;
};

const makeSut = (): SutTypes => {
  const stubEncrypter = makeEncrypter();
  const stubAddAccountRepository = makeAddAccountRepository();
  const sut = new DbAddAccount(stubEncrypter, stubAddAccountRepository);

  return {
    sut,
    stubEncrypter,
    stubAddAccountRepository,
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

  test('Should call AddAccountRepository with correct values', async () => {
    const { stubAddAccountRepository, sut } = makeSut();
    const spyAdd = jest.spyOn(stubAddAccountRepository, 'add');
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password',
    };

    await sut.add(accountData);

    expect(spyAdd).toHaveBeenCalledWith({
      name: 'valid_name',
      email: 'valid_email',
      password: 'hashed_password',
    });
  });

  test('Should throw if AddAccountRepository throws', async () => {
    const { stubAddAccountRepository, sut } = makeSut();
    jest
      .spyOn(stubAddAccountRepository, 'add')
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
