//import { IGroup } from "./IGroup";
import { INftItem } from "./INftItem";

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

enum Job {
  Developer = "Developer"
}

export interface IUser {
  id: number;
  login: string;
  name: string;
  role: Role;
  pet: INftItem;
  inventory: INftItem[];
  power: number;
  workAdress: string;
  tempAdress: string;
  balance: number;
  //groups: IGroup[],
  gitlabToken: string;
  job: Job;
}
