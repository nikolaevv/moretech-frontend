//import { IGroup } from "./IGroup";
//import { INftItem } from "./INftItem";

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  DEVELOPER = "DEVELOPER"
}

export interface IUser {
  id: number;
  login: string;
  name: string;
  role: Role;
  power: number;
  workAdress: string;
  tempAdress: string;
  balance: number;
  gitlabToken: string;
}
