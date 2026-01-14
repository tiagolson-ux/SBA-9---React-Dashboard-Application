import type { Task } from "./types";

// Note to self: Shows summary numbers for the dashboard.
export default function TaskStats({ tasks }: { tasks: Task[] }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total - completed;

  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Stat label="Total" value={total} />
      <Stat label="Active" value={active} />
      <Stat label="Completed" value={completed} />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div
      style={{
        padding: "10px 12px",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        minWidth: "120px",
      }}
    >
      <div style={{ fontSize: "12px", opacity: 0.7 }}>{label}</div>
      <div style={{ fontSize: "20px", fontWeight: 700 }}>{value}</div>
    </div>
  );
}

