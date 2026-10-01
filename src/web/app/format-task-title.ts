import { Task } from './actions';

export function formatTaskTitle(task: Task): string {
  return String(task.title).trim();
}
