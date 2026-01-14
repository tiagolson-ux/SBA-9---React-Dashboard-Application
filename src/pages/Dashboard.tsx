import { useState } from "react";
import TaskForm from "../features/tasks/TaskForm";
import TaskList from "../features/tasks/TaskList";
import TaskStats from "../features/tasks/TaskStats";
import TaskFilters from "../features/tasks/TaskFilters";
import { initialTasks } from "../features/tasks/taskData";
import type { Task } from "../features/tasks/types";
import type { TaskFilter } from "../features/tasks/filterTypes";

// Note to self: Dashboard page is the home screen summary area.
export default function Dashboard() {
  // Note to self: tasks state lives here so it can be shared by TaskForm and TaskList
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // Note to self: filter state controls which tasks we show
  const [filter, setFilter] = useState<TaskFilter>("all");

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

  // Note to self: filteredTasks is what we actually pass into TaskList
  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true; // "all"
  });

  return (
    <section style={{ display: "grid", gap: "16px" }}>
      <div>
        <h2 style={{ marginTop: 0 }}>Overview</h2>
        <p>This is where we’ll show task stats, filters, and quick actions.</p>
      </div>

      <div style={{ display: "grid", gap: "12px" }}>
        <h3 style={{ margin: 0 }}>Tasks</h3>

        {/* Note to self: These are based on ALL tasks (not filtered) */}
        <TaskStats tasks={tasks} />

        {/* Note to self: This changes which tasks we display */}
        <TaskFilters value={filter} onChange={setFilter} />

        <TaskForm onAdd={handleAddTask} />

        {/* Note to self: Show filtered tasks here */}
        <TaskList tasks={filteredTasks} onToggle={handleToggleTask} />
      </div>
    </section>
  );
}

