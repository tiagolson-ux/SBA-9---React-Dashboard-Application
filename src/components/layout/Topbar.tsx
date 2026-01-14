// Note to self: Topbar is the header at the top of the main content.
export default function Topbar() {
  return (
    <header
      style={{
        padding: "16px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "18px" }}>Dashboard</h1>
      <span style={{ fontSize: "14px" }}>Welcome, Tia</span>
    </header>
  );
}
// Note to self: Topbar is the header at the top of the main content.