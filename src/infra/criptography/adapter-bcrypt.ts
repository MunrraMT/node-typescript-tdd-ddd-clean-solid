import bcrypt from 'bcrypt';

import InterfaceEncrypter from '~/data/protocols/interface-encrypter';

class AdapterBcrypter implements InterfaceEncrypter {
  private readonly salt: number;

  constructor(salt: number) {
    this.salt = salt;
  }

  async encrypt(value: string): Promise<string> {
    await bcrypt.hash(value, this.salt);
    return null;
  }
}

export default AdapterBcrypter;
