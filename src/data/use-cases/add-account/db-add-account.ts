import {
  InterfaceAccountModel,
  InterfaceAddAccount,
  InterfaceAddAccountModel,
  InterfaceEncrypter,
} from './db-add-account-protocols';

class DbAddAccount implements InterfaceAddAccount {
  private readonly encrypter;

  constructor(encrypter: InterfaceEncrypter) {
    this.encrypter = encrypter;
  }

  async add(account: InterfaceAddAccountModel): Promise<InterfaceAccountModel> {
    const { password } = account;
    await this.encrypter.encrypt(password);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Promise.resolve(null);
  }
}

export default DbAddAccount;
