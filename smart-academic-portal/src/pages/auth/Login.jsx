import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useAuthStore } from "../../store/authStore";

export default function Login() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const { login, loading, error, user } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = await login(username, password);
    if (ok) navigate("/app");
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 p-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <label className="block mb-2 text-sm">Username</label>
        <input className="w-full mb-4 px-3 py-2 border rounded-lg" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <label className="block mb-2 text-sm">Password</label>
        <input type="password" className="w-full mb-4 px-3 py-2 border rounded-lg" value={password} onChange={(e)=>setPassword(e.target.value)} />
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <Button className="w-full" disabled={loading}>{loading ? "Signing in..." : "Sign In"}</Button>
        <p className="text-xs text-gray-500 mt-3">Demo will log you in as <b>ADMIN</b>.</p>
      </form>
    </div>
  );
}
