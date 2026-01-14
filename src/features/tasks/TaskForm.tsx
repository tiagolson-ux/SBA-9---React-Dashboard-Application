import { useState } from "react";

// Note to self: TaskForm collects user input and sends a new task title upward.
export default function TaskForm({
  onAdd,
}: {
  onAdd: (title: string) => void;
}) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Note to self: Prevent empty tasks
    const cleaned = title.trim();
    if (!cleaned) return;

    onAdd(cleaned);
    setTitle(""); // Note to self: Clear input after adding
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
        // Note to self: Controlled input so React owns the value
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        style={{
          flex: 1,
          padding: "10px 12px",
          borderRadius: "10px",
          border: "1px solid #e5e7eb",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "10px 14px",
          borderRadius: "10px",
          border: "1px solid #e5e7eb",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
}
