import InterfaceAccountModel from '../models/interface-account';

interface InterfaceAddAccountModel {
  name: string;
  email: string;
  password: string;
}

interface InterfaceAddAccount {
  add(account: InterfaceAddAccountModel): Promise<InterfaceAccountModel>;
}

export { InterfaceAddAccount, InterfaceAddAccountModel };
