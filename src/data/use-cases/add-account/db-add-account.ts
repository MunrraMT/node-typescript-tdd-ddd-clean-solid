import {
  InterfaceAccountModel,
  InterfaceAddAccount,
  InterfaceAddAccountModel,
  InterfaceAddAccountRepository,
  InterfaceEncrypter,
} from './db-add-account-protocols';

class DbAddAccount implements InterfaceAddAccount {
  private readonly encrypter;

  private readonly addAccountRepository;

  constructor(
    encrypter: InterfaceEncrypter,
    addAccountRepository: InterfaceAddAccountRepository
  ) {
    this.encrypter = encrypter;
    this.addAccountRepository = addAccountRepository;
  }

  async add(
    accountData: InterfaceAddAccountModel
  ): Promise<InterfaceAccountModel> {
    const { password } = accountData;
    const hashedPassword = await this.encrypter.encrypt(password);
    await this.addAccountRepository.add(
      Object.assign(accountData, { password: hashedPassword })
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Promise.resolve(null);
  }
}

export default DbAddAccount;
