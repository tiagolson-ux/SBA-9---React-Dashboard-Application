// Note to self: This is the TypeScript shape of a task.
// Note to self: Every task should have an id, title, completed flag, and optional due date.
export type Task = {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string; // Note to self: We'll store as a simple string like "2026-01-14"
};
// Note to self: This is the TypeScript shape of a task.