// Note to self: Sidebar is the left navigation area of the dashboard.
export default function Sidebar() {
  return (
    <aside
      // Note to self: Fixed width sidebar with full height.
      style={{
        width: "240px",
        minHeight: "100vh",
        padding: "16px",
        borderRight: "1px solid #e5e7eb",
      }}
    >
      {/* Note to self: App title / branding */}
      <h2 style={{ margin: 0, marginBottom: "16px" }}>
        Task Dashboard
      </h2>

      {/* Note to self: Simple nav links (static for now) */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <a href="#">Dashboard</a>
        <a href="#">Tasks</a>
      </nav>
    </aside>
  );
}
// Note to self: Sidebar is the left navigation area of the dashboard.