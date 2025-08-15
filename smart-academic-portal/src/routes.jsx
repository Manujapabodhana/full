import { createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from "./components/common/ProtectedRoute";

// Simple welcome component
function Welcome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">🎓</h1>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Smart Academic Portal</h1>
          <p className="text-gray-600 mb-8">AI-Powered School Management System</p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/login" 
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Login to Portal
          </a>
          
          <div className="text-sm text-gray-500">
            <p>Experience the future of education management</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Welcome />
  },
  { 
    path: "/login", 
    element: <Login />
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  { 
    path: "*", 
    element: <Welcome />
  }
]);

export default router;
