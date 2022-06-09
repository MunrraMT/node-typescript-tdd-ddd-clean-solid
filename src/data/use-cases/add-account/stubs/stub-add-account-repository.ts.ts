import {
  InterfaceAccountModel,
  InterfaceAddAccountModel,
  InterfaceAddAccountRepository,
} from '../db-add-account-protocols';

const makeAddAccountRepository = (): InterfaceAddAccountRepository => {
  class StubAddAccountRepository implements InterfaceAddAccountRepository {
    async add(
      accountData: InterfaceAddAccountModel
    ): Promise<InterfaceAccountModel> {
      const fakeAccount = {
        id: 'valid_id',
        name: 'valid_name',
        email: 'valid_email',
        password: 'hashed_password',
      };

      return Promise.resolve(fakeAccount);
    }
  }

  return new StubAddAccountRepository();
};

export default makeAddAccountRepository;
