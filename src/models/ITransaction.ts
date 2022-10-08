import { IUser } from "./IUser";

enum TransactionType {

};

export interface ITransaction {
  id: number;
  endedAt: Date;
  sender: IUser;
  receiver: IUser;
  type: TransactionType;
}
