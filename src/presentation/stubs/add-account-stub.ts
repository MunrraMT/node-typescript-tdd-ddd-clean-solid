import IAccountModel from '~/domain/models/account';
import { IAddAccount, IAddAccountModel } from '~/domain/use-cases/add-account';

class AddAccountStub implements IAddAccount {
  async add(account: IAddAccountModel): Promise<IAccountModel> {
    const fakeAccount = {
      id: 'valid_id',
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password',
    };

    return Promise.resolve(fakeAccount);
  }
}

export default AddAccountStub;
