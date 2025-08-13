export default function RoleBadge({ role }) {
  const color =
    role === "ADMIN" ? "bg-indigo-100 text-indigo-700" :
    role === "TEACHER" ? "bg-emerald-100 text-emerald-700" :
    role === "STUDENT" ? "bg-blue-100 text-blue-700" :
    "bg-amber-100 text-amber-700";
  return <span className={`px-2 py-1 rounded text-xs font-medium ${color}`}>{role}</span>;
}
