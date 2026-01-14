import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// Note to self: AppLayout wraps pages with Sidebar + Topbar
export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />
        <main style={{ padding: "16px" }}>{children}</main>
      </div>
    </div>
  );
}
// Note to self: AppLayout wraps pages with Sidebar + Topbar