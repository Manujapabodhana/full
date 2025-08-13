import Button from "../ui/Button";
import RoleBadge from "../common/RoleBadge";
import { useAuthStore } from "../../store/authStore";

export default function Topbar() {
  const { user, logout } = useAuthStore();
  return (
    <header className="h-14 border-b bg-white flex items-center justify-between px-4">
      <div className="font-semibold">Welcome{user?.name ? `, ${user.name}` : ""}</div>
      <div className="flex items-center gap-3">
        {user?.role && <RoleBadge role={user.role} />}
        <Button onClick={logout}>Logout</Button>
      </div>
    </header>
  );
}
