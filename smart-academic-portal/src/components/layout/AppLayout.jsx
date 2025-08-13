import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout() {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr] bg-gray-50">
      <Sidebar />
      <div className="flex flex-col">
        <Topbar />
        <main className="p-6"><Outlet /></main>
      </div>
    </div>
  );
}
