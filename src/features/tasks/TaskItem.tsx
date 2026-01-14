import type { Task } from "./types";

// Note to self: TaskItem displays ONE task row.
export default function TaskItem({
  task,
  onToggle,
}: {
  task: Task;
  onToggle: (id: string) => void;
}) {
  return (
    <li
      // Note to self: Simple row layout
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 12px",
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
      }}
    >
      <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Note to self: Checkbox toggles completed state */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        {/* Note to self: Strike-through if completed */}
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
        </span>
      </label>

      {/* Note to self: Show due date if it exists */}
      {task.dueDate ? (
        <small style={{ opacity: 0.7 }}>Due: {task.dueDate}</small>
      ) : null}
    </li>
  );
}
// Note to self: TaskItem displays ONE task row.
