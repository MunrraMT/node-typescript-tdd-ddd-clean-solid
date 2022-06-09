import { InterfaceAddAccountModel } from '../../domain/use-cases/interface-add-account';
import InterfaceAccountModel from '../../domain/models/interface-account';

interface InterfaceAddAccountRepository {
  add(accountData: InterfaceAddAccountModel): Promise<InterfaceAccountModel>;
}

export default InterfaceAddAccountRepository;
