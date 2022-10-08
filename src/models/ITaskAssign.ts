import { ITask } from "models/ITask";

export interface ITaskAssign {
  id: number;
  userId: number;
  task: ITask,
  done: boolean;
}
