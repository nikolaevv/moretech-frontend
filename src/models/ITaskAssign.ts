import { ITask } from "models/ITask";
import { IUser } from "./IUser";

export interface ITaskAssign {
  id: number;
  user: IUser;
  task: ITask,
  done: boolean;
}
