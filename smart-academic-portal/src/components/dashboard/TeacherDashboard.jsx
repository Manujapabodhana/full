import { useState } from "react";

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

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">👨‍🏫</span>
              </div>
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
              <p className="text-gray-600">Manage your classes and students</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Classes */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">My Classes</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {classes.map((classItem) => (
              <div key={classItem.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">{classItem.name}</h4>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {classItem.students} students
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{classItem.subject}</p>
                <p className="mt-2 text-xs text-gray-400">{classItem.schedule}</p>
                <div className="mt-3 flex space-x-2">
                  <button className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700">
                    View Students
                  </button>
                  <button className="text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">
                    Take Attendance
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Assignments */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Assignments</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assignment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {assignments.map((assignment) => (
                  <tr key={assignment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {assignment.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {assignment.class}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {assignment.due}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        assignment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        assignment.status === 'grading' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {assignment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-2">Grade</button>
                      <button className="text-green-600 hover:text-green-900">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">{event.event}</p>
                  <p className="text-sm text-gray-500">{event.date} at {event.time}</p>
                </div>
                <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
