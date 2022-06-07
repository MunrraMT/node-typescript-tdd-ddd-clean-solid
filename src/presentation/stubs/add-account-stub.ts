import InterfaceAccountModel from '~/domain/models/interface-account';
import {
  InterfaceAddAccount,
  InterfaceAddAccountModel,
} from '~/domain/use-cases/interface-add-account';

class StubAddAccount implements InterfaceAddAccount {
  async add(account: InterfaceAddAccountModel): Promise<InterfaceAccountModel> {
    const fakeAccount = {
      id: 'valid_id',
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password',
    };

    return Promise.resolve(fakeAccount);
  }
}

export default StubAddAccount;
