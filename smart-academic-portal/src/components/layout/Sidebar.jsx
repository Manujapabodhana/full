import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const Item = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block px-3 py-2 rounded-lg text-sm ${isActive ? "bg-indigo-100 text-indigo-700" : "text-gray-700 hover:bg-gray-100"}`
    }
  >
    {label}
  </NavLink>
);

export default function Sidebar() {
  const role = useAuthStore((s) => s.user?.role);

  return (
    <aside className="h-screen sticky top-0 p-4 border-r bg-white">
      <div className="font-bold text-xl mb-6">Smart Portal</div>
      <div className="space-y-1">
        <Item to="/app/dashboard" label="Dashboard" />

        {role === "ADMIN" && (
          <>
            <Item to="/app/admin/users" label="Users" />
            <Item to="/app/admin/classes" label="Classes" />
            <Item to="/app/admin/subjects" label="Subjects" />
            <Item to="/app/admin/reports" label="Reports" />
          </>
        )}

        {role === "TEACHER" && (
          <>
            <Item to="/app/teacher/attendance" label="Attendance" />
            <Item to="/app/teacher/assignments" label="Assignments" />
            <Item to="/app/teacher/gradebook" label="Gradebook" />
          </>
        )}

        {role === "STUDENT" && (
          <>
            <Item to="/app/student/assignments" label="My Assignments" />
            <Item to="/app/student/timetable" label="Timetable" />
          </>
        )}

        {role === "PARENT" && <Item to="/app/parent/messages" label="Messages" />}
      </div>
    </aside>
  );
}
