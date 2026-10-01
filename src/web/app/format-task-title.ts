export function formatTaskTitle(task: { title: string }): string {
  return String(task.title).trim();
}
