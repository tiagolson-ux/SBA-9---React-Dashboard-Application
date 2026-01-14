import type { TaskFilter } from "./filterTypes";

// Note to self: Buttons that switch which tasks we show.
export default function TaskFilters({
  value,
  onChange,
}: {
  value: TaskFilter;
  onChange: (next: TaskFilter) => void;
}) {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <FilterButton active={value === "all"} onClick={() => onChange("all")}>
        All
      </FilterButton>

      <FilterButton active={value === "active"} onClick={() => onChange("active")}>
        Active
      </FilterButton>

      <FilterButton
        active={value === "completed"}
        onClick={() => onChange("completed")}
      >
        Completed
      </FilterButton>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 12px",
        borderRadius: "999px",
        border: "1px solid #e5e7eb",
        cursor: "pointer",
        fontWeight: 600,
        opacity: active ? 1 : 0.7,
      }}
    >
      {children}
    </button>
  );
}
