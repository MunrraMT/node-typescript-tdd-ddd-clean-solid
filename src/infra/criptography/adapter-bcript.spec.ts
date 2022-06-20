import bcrypt from 'bcrypt';

import AdapterBcrypter from './adapter-bcrypt';

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return Promise.resolve('hash_value');
  },
}));

const salt = 12;

const makeSut = (): AdapterBcrypter => {
  const sut = new AdapterBcrypter(salt);
  return sut;
};

describe('Bcrypter Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const sut = makeSut();
    const hashSpy = jest.spyOn(bcrypt, 'hash');
    await sut.encrypt('any_value');
    expect(bcrypt.hash).toHaveBeenCalledWith('any_value', salt);
  });

  test('Should return a hash on success', async () => {
    const sut = makeSut();
    const hash = await sut.encrypt('any_value');
    expect(hash).toBe('hash_value');
  });
});
