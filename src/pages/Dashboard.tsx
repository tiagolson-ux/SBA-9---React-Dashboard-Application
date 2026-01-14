import { useState } from "react";
import TaskForm from "../features/tasks/TaskForm";
import TaskList from "../features/tasks/TaskList";
import { initialTasks } from "../features/tasks/taskData";
import type { Task } from "../features/tasks/types";

// Note to self: Dashboard page is the home screen summary area.
export default function Dashboard() {
  // Note to self: tasks state lives here so it can be shared by TaskForm and TaskList
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  function handleAddTask(title: string) {
    // Note to self: Create a simple id using current time
    const newTask: Task = {
      id: String(Date.now()),
      title,
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);
  }

  function handleToggleTask(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  return (
    <section style={{ display: "grid", gap: "16px" }}>
      <div>
        <h2 style={{ marginTop: 0 }}>Overview</h2>
        <p>This is where we’ll show task stats, filters, and quick actions.</p>
      </div>

      <div style={{ display: "grid", gap: "12px" }}>
        <h3 style={{ margin: 0 }}>Tasks</h3>
        <TaskForm onAdd={handleAddTask} />
        <TaskList tasks={tasks} onToggle={handleToggleTask} />
      </div>
    </section>
  );
}
