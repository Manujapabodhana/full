import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showDemo, setShowDemo] = useState(false);

  const { login, demoLogin, loading, error, clearError, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    clearError();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData.email, formData.password);
    if (success) {
      navigate("/dashboard");
    }
  };

  const handleDemoLogin = (role) => {
    demoLogin(role);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-20 w-20 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
            <span className="text-3xl animate-bounce">🎓</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2 animate-fade-in">
            Smart Academic Portal
          </h2>
          <p className="text-lg text-indigo-200 animate-fade-in-delay">
            Your Gateway to Educational Excellence
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 animate-slide-up">
          {/* Error Message */}
          {error && (
            <div className="bg-red-500/20 border border-red-400/50 text-red-100 px-4 py-3 rounded-lg mb-6 animate-shake">
              <div className="flex items-center">
                <span className="text-red-400 mr-2">⚠️</span>
                {error}
              </div>
            </div>
          )}

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-indigo-400">📧</span>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-white/50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-indigo-400">🔒</span>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-white/50"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    <span className="animate-pulse">Signing in...</span>
                  </div>
                ) : (
                  <span className="flex items-center">
                    <span>Sign In</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                )}
              </button>
            </div>
          </form>

          {/* Demo Section */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/80">✨ Try Demo Accounts ✨</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setShowDemo(!showDemo)}
                className="w-full text-center text-sm text-indigo-300 hover:text-white transition-colors duration-300 py-2 rounded-lg hover:bg-white/10"
              >
                {showDemo ? "Hide" : "Show"} Demo Accounts
                <span className={`ml-2 transform transition-transform duration-300 ${showDemo ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {showDemo && (
                <div className="mt-4 grid grid-cols-2 gap-3 animate-fade-in">
                  <button
                    onClick={() => handleDemoLogin("ADMIN")}
                    className="group px-4 py-3 border border-white/30 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-red-500/20 to-pink-500/20 hover:from-red-500/30 hover:to-pink-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="text-lg mb-1">👑</div>
                    <div>Admin</div>
                  </button>
                  <button
                    onClick={() => handleDemoLogin("TEACHER")}
                    className="group px-4 py-3 border border-white/30 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="text-lg mb-1">👨‍🏫</div>
                    <div>Teacher</div>
                  </button>
                  <button
                    onClick={() => handleDemoLogin("STUDENT")}
                    className="group px-4 py-3 border border-white/30 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="text-lg mb-1">👨‍🎓</div>
                    <div>Student</div>
                  </button>
                  <button
                    onClick={() => handleDemoLogin("PARENT")}
                    className="group px-4 py-3 border border-white/30 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-purple-500/20 to-violet-500/20 hover:from-purple-500/30 hover:to-violet-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="text-lg mb-1">👨‍👩‍👧‍👦</div>
                    <div>Parent</div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-white/60 animate-fade-in-delay-2">
          <p>© 2025 Smart Academic Portal. Empowering Education with AI.</p>
        </div>
      </div>
    </div>
  );
}
