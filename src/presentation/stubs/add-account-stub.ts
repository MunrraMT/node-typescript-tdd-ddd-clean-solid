import IAccountModel from '~/domain/models/account';
import { IAddAccount, IAddAccountModel } from '~/domain/use-cases/add-account';

class AddAccountStub implements IAddAccount {
  add(account: IAddAccountModel): IAccountModel {
    const fakeAccount = {
      id: 'valid_id',
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password',
    };

    return fakeAccount;
  }
}

export default AddAccountStub;
