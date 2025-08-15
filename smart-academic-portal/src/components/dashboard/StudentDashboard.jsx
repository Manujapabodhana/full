import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export default function StudentDashboard() {
  const [grades] = useState([
    { id: 1, subject: "Mathematics", grade: "A-", percentage: 88, teacher: "Mr. Johnson" },
    { id: 2, subject: "Physics", grade: "B+", percentage: 85, teacher: "Mrs. Wilson" },
    { id: 3, subject: "Chemistry", grade: "A", percentage: 92, teacher: "Dr. Brown" },
    { id: 4, subject: "English", grade: "B", percentage: 82, teacher: "Ms. Davis" }
  ]);

  const [assignments] = useState([
    { id: 1, title: "Math Homework Ch. 5", subject: "Mathematics", due: "Tomorrow", status: "pending" },
    { id: 2, title: "Physics Lab Report", subject: "Physics", due: "Aug 18", status: "submitted" },
    { id: 3, title: "English Essay", subject: "English", due: "Aug 20", status: "pending" }
  ]);

  const [schedule] = useState([
    { id: 1, subject: "Mathematics", time: "9:00 AM - 10:00 AM", room: "Room 101", teacher: "Mr. Johnson" },
    { id: 2, subject: "Physics", time: "10:30 AM - 11:30 AM", room: "Lab 202", teacher: "Mrs. Wilson" },
    { id: 3, subject: "Chemistry", time: "2:00 PM - 3:00 PM", room: "Lab 301", teacher: "Dr. Brown" }
  ]);

  const [aiPrediction] = useState({
    riskLevel: "LOW",
    predictedGPA: 3.7,
    recommendations: [
      "Keep up the excellent work in Chemistry",
      "Consider additional practice in Mathematics",
      "Maintain consistent attendance"
    ]
  });

  const [loading, setLoading] = useState(true);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <div className="text-xl text-white animate-pulse">Loading your dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Header */}
      <header className="glass border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold text-white text-gradient">Student Dashboard</h1>
              <p className="text-gray-300 mt-1">Welcome back, {user?.name || 'Student'}! 🎓</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-delay"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass p-6 rounded-2xl card-hover animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Current GPA</h3>
              <div className="p-2 bg-blue-500/20 rounded-full">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2 animate-pulse-slow">{aiPrediction.predictedGPA}</div>
            <p className="text-gray-300">Above average performance</p>
            <div className="flex items-center mt-4">
              <span className="text-emerald-400 text-sm">↗ +0.2 from last semester</span>
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl card-hover animate-fade-in-delay">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Risk Level</h3>
              <div className="p-2 bg-green-500/20 rounded-full">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-green-400 mb-2 animate-glow">{aiPrediction.riskLevel}</div>
            <p className="text-gray-300">AI Performance Assessment</p>
            <div className="mt-4 bg-gray-700/50 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out w-4/5"></div>
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl card-hover animate-fade-in-delay-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Pending Tasks</h3>
              <div className="p-2 bg-orange-500/20 rounded-full">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-orange-400 mb-2 animate-float">
              {assignments.filter(a => a.status === 'pending').length}
            </div>
            <p className="text-gray-300">Assignments due soon</p>
            <div className="flex items-center mt-4">
              <span className="text-yellow-400 text-sm">📝 Stay organized!</span>
            </div>
          </div>
        </div>

        {/* AI Progress Prediction */}
        <div className="glass rounded-2xl overflow-hidden animate-slide-up">
          <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <div className="w-8 h-8 bg-purple-600/50 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm">🤖</span>
              </div>
              AI Progress Prediction
            </h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-gray-300">Risk Level:</span>
                  <span className={`ml-2 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                    aiPrediction.riskLevel === 'LOW' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    aiPrediction.riskLevel === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {aiPrediction.riskLevel}
                  </span>
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium text-gray-300">Predicted GPA:</span>
                  <span className="ml-2 text-lg font-bold text-blue-400">{aiPrediction.predictedGPA}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-3">AI Recommendations:</h4>
                <ul className="space-y-2">
                  {aiPrediction.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-300">
                      <span className="text-green-400 mr-2">•</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Grades Overview */}
        <div className="glass rounded-2xl overflow-hidden animate-slide-up">
          <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Current Grades
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {grades.map((grade, index) => (
                <div key={grade.id} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-white text-lg">{grade.subject}</h4>
                    <div className={`text-2xl font-bold ${
                      grade.percentage >= 90 ? 'text-green-400' : 
                      grade.percentage >= 80 ? 'text-blue-400' : 'text-orange-400'
                    }`}>
                      {grade.grade}
                    </div>
                  </div>
                  <div className="text-sm text-gray-300 mb-2">Teacher: {grade.teacher}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Score: {grade.percentage}%</span>
                    <div className="w-24 bg-gray-700/50 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                          grade.percentage >= 90 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 
                          grade.percentage >= 80 ? 'bg-gradient-to-r from-blue-400 to-cyan-500' : 
                          'bg-gradient-to-r from-orange-400 to-red-500'
                        }`}
                        style={{ width: `${grade.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Assignments and Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Assignments */}
          <div className="glass rounded-2xl overflow-hidden animate-slide-up">
            <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Recent Assignments
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {assignments.map((assignment, index) => (
                  <div key={assignment.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{assignment.title}</div>
                      <div className="text-sm text-gray-300">{assignment.subject}</div>
                      <div className="text-sm text-gray-400 mt-1">Due: {assignment.due}</div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                      assignment.status === 'submitted' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {assignment.status === 'submitted' ? '✓ Submitted' : '⏳ Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="glass rounded-2xl overflow-hidden animate-slide-up">
            <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-pink-600/20 to-purple-600/20">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <svg className="w-6 h-6 mr-3 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Today's Schedule
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-4 h-4 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 animate-pulse"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-lg">{item.subject}</div>
                      <div className="text-sm text-gray-300">{item.time}</div>
                      <div className="text-xs text-gray-400 mt-1">{item.room} • {item.teacher}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
