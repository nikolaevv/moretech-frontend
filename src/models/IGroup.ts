import { IUser } from "./IUser";

export interface IGroup {
  id: number;
  name: string;
  members: IUser[];
}
