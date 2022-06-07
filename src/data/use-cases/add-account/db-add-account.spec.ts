import DbAddAccount from './db-add-account';

describe('DbAddAccount UseCase', () => {
  test('Should call Encrypter with correct password', async () => {
    class StubEncrypter {
      async encrypt(value: string): Promise<string> {
        return Promise.resolve('hashed_password');
      }
    }
    const stubEncrypter = new StubEncrypter();
    const sut = new DbAddAccount(stubEncrypter);
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
