import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export default function TeacherDashboard() {
  const [classes] = useState([
    { id: 1, name: "Mathematics 10A", students: 28, subject: "Mathematics", schedule: "Mon, Wed, Fri 9:00 AM" },
    { id: 2, name: "Physics 11B", students: 25, subject: "Physics", schedule: "Tue, Thu 10:30 AM" },
    { id: 3, name: "Chemistry 12C", students: 22, subject: "Chemistry", schedule: "Mon, Wed 2:00 PM" }
  ]);

  const [assignments] = useState([
    { id: 1, title: "Quadratic Equations", class: "Mathematics 10A", due: "Tomorrow", status: "pending" },
    { id: 2, title: "Physics Lab Report", class: "Physics 11B", due: "Next Week", status: "grading" },
    { id: 3, title: "Chemical Reactions", class: "Chemistry 12C", due: "Today", status: "overdue" }
  ]);

  const [upcomingEvents] = useState([
    { id: 1, event: "Parent-Teacher Meeting", date: "Aug 15, 2025", time: "2:00 PM" },
    { id: 2, event: "Staff Meeting", date: "Aug 16, 2025", time: "4:00 PM" },
    { id: 3, event: "Science Fair", date: "Aug 20, 2025", time: "10:00 AM" }
  ]);

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <div className="text-xl text-white animate-pulse">Loading your dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Header */}
      <header className="glass border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold text-white text-gradient">Teacher Dashboard</h1>
              <p className="text-gray-300 mt-1">Welcome back, {user?.name || 'Teacher'}! 👨‍🏫</p>
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
              <h3 className="text-lg font-semibold text-white">Total Classes</h3>
              <div className="p-2 bg-emerald-500/20 rounded-full">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0V9a1 1 0 011-1h4a1 1 0 011 1v11" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-emerald-400 mb-2 animate-glow">{classes.length}</div>
            <p className="text-gray-300">Active teaching assignments</p>
            <div className="flex items-center mt-4">
              <span className="text-cyan-400 text-sm">📚 All subjects covered</span>
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl card-hover animate-fade-in-delay">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Total Students</h3>
              <div className="p-2 bg-cyan-500/20 rounded-full">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-cyan-400 mb-2 animate-pulse-slow">
              {classes.reduce((total, cls) => total + cls.students, 0)}
            </div>
            <p className="text-gray-300">Students under guidance</p>
            <div className="flex items-center mt-4">
              <span className="text-emerald-400 text-sm">👥 Great engagement!</span>
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl card-hover animate-fade-in-delay-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Pending Tasks</h3>
              <div className="p-2 bg-orange-500/20 rounded-full">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-orange-400 mb-2 animate-float">
              {assignments.filter(a => a.status === 'pending' || a.status === 'grading').length}
            </div>
            <p className="text-gray-300">Assignments to review</p>
            <div className="flex items-center mt-4">
              <span className="text-yellow-400 text-sm">⏰ Stay on top!</span>
            </div>
          </div>
        </div>

        {/* My Classes */}
        <div className="glass rounded-2xl overflow-hidden animate-slide-up">
          <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-emerald-600/20 to-teal-600/20">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <svg className="w-6 h-6 mr-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0V9a1 1 0 011-1h4a1 1 0 011 1v11" />
              </svg>
              My Classes
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {classes.map((cls, index) => (
                <div key={cls.id} className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-emerald-500/20 rounded-full">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-cyan-400">{cls.students}</span>
                  </div>
                  <h4 className="font-semibold text-white text-lg mb-2">{cls.name}</h4>
                  <p className="text-gray-300 text-sm mb-3">{cls.subject}</p>
                  <div className="text-xs text-gray-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {cls.schedule}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-emerald-400">👥 {cls.students} students</span>
                    <button className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs hover:bg-emerald-500/30 transition-colors">
                      Manage
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Assignments and Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Assignments */}
          <div className="glass rounded-2xl overflow-hidden animate-slide-up">
            <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-cyan-600/20 to-emerald-600/20">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <svg className="w-6 h-6 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Assignment Status
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {assignments.map((assignment, index) => (
                  <div key={assignment.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{assignment.title}</div>
                      <div className="text-sm text-gray-300">{assignment.class}</div>
                      <div className="text-sm text-gray-400 mt-1">Due: {assignment.due}</div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                      assignment.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      assignment.status === 'grading' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {assignment.status === 'pending' ? '⏳ Pending' :
                       assignment.status === 'grading' ? '📝 Grading' : '🚨 Overdue'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="glass rounded-2xl overflow-hidden animate-slide-up">
            <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-teal-600/20 to-cyan-600/20">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <svg className="w-6 h-6 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upcoming Events
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={event.id} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-4 h-4 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50 animate-pulse"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-lg">{event.event}</div>
                      <div className="text-sm text-gray-300 flex items-center mt-1">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">⏰ {event.time}</div>
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-400">
                      📅 Scheduled
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
