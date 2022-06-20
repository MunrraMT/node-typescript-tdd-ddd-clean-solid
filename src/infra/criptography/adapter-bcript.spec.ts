import bcrypt from 'bcrypt';

import AdapterBcrypter from './adapter-bcrypt';

describe('Bcrypter Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const salt = 12;
    const sut = new AdapterBcrypter(salt);
    const hashSpy = jest.spyOn(bcrypt, 'hash');
    await sut.encrypt('any_value');
    expect(bcrypt.hash).toHaveBeenCalledWith('any_value', salt);
  });
});
