import type { Task } from "./types";
import TaskItem from "./TaskItem";

// Note to self: TaskList displays a list of tasks.
export default function TaskList({
  tasks,
  onToggle,
}: {
  tasks: Task[];
  onToggle: (id: string) => void;
}) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add your first one!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  );
}
    