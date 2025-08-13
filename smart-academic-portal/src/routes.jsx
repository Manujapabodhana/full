import { createBrowserRouter } from "react-router-dom";

// Simple test component
function TestHome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Smart Academic Portal</h1>
        <p className="text-gray-600 mb-8">Welcome to the Academic Management System</p>
        <p className="text-green-600 font-semibold">✅ React App is working!</p>
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
            Test Button
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Another Button
          </button>
        </div>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <TestHome />
  },
  { 
    path: "*", 
    element: <TestHome />
  }
]);

export default router;
