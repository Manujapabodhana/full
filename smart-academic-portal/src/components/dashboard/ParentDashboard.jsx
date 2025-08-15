import { useState } from "react";

export default function ParentDashboard() {
  const [children] = useState([
    {
      id: 1,
      name: "Emma Johnson",
      grade: "10th Grade",
      section: "A",
      rollNumber: "STU2024001",
      gpa: 3.8,
      attendance: 92
    }
  ]);

  const [childData] = useState({
    grades: [
      { subject: "Mathematics", grade: "A-", percentage: 88, trend: "up" },
      { subject: "Physics", grade: "B+", percentage: 85, trend: "stable" },
      { subject: "Chemistry", grade: "A", percentage: 92, trend: "up" },
      { subject: "English", grade: "B", percentage: 82, trend: "down" }
    ],
    recentActivities: [
      { id: 1, activity: "Submitted Math homework", date: "Aug 12, 2025", type: "assignment" },
      { id: 2, activity: "Attended Physics class", date: "Aug 12, 2025", type: "attendance" },
      { id: 3, activity: "Received grade for Chemistry test", date: "Aug 11, 2025", type: "grade" },
      { id: 4, activity: "Missed English class", date: "Aug 10, 2025", type: "absence" }
    ],
    upcomingEvents: [
      { id: 1, event: "Parent-Teacher Meeting", date: "Aug 15, 2025", time: "2:00 PM" },
      { id: 2, event: "Science Fair", date: "Aug 20, 2025", time: "10:00 AM" },
      { id: 3, event: "Math Quiz", date: "Aug 18, 2025", time: "9:00 AM" }
    ],
    aiInsights: {
      riskLevel: "LOW",
      predictedGPA: 3.7,
      strengths: ["Excellent in Science subjects", "Consistent attendance"],
      concerns: ["English performance declining", "Late submissions in Math"],
      recommendations: [
        "Consider English tutoring",
        "Encourage better time management",
        "Maintain current study habits in Science"
      ]
    }
  });

  const selectedChild = children[0]; // For demo, using first child

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">👨‍👩‍👧‍👦</span>
              </div>
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
              <p className="text-gray-600">Monitor your child's academic progress</p>
            </div>
          </div>
        </div>
      </div>

      {/* Child Selection */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">My Children</h3>
          {children.map((child) => (
            <div key={child.id} className="border border-gray-200 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{child.name}</h4>
                  <p className="text-sm text-gray-500">{child.grade} - Section {child.section}</p>
                  <p className="text-xs text-gray-400">Roll No: {child.rollNumber}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Current GPA</div>
                  <div className="text-xl font-bold text-blue-600">{child.gpa}</div>
                  <div className="text-xs text-gray-500">Attendance: {child.attendance}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 overflow-hidden shadow rounded-lg border border-purple-200">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white text-sm">🤖</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900">AI Insights for {selectedChild.name}</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Risk Level:</span>
                  <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                    childData.aiInsights.riskLevel === 'LOW' ? 'bg-green-100 text-green-800' :
                    childData.aiInsights.riskLevel === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {childData.aiInsights.riskLevel}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Predicted GPA: </span>
                  <span className="text-lg font-bold text-purple-600">{childData.aiInsights.predictedGPA}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Strengths:</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  {childData.aiInsights.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Areas of Concern:</h4>
                <ul className="text-sm text-red-600 space-y-1">
                  {childData.aiInsights.concerns.map((concern, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">!</span>
                      {concern}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">AI Recommendations:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {childData.aiInsights.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start p-2 bg-white rounded border border-purple-100">
                    <span className="text-purple-500 mr-2">💡</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Performance */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Academic Performance</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {childData.grades.map((grade, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-gray-900">{grade.subject}</h4>
                  <div className="flex items-center">
                    <span className={`text-lg font-bold ${
                      grade.percentage >= 90 ? 'text-green-600' :
                      grade.percentage >= 80 ? 'text-blue-600' :
                      grade.percentage >= 70 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {grade.grade}
                    </span>
                    <span className={`ml-2 text-xs ${
                      grade.trend === 'up' ? 'text-green-500' :
                      grade.trend === 'down' ? 'text-red-500' :
                      'text-gray-500'
                    }`}>
                      {grade.trend === 'up' ? '↗️' : grade.trend === 'down' ? '↘️' : '➡️'}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{grade.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-3">
              {childData.recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-3 ${
                      activity.type === 'assignment' ? 'bg-blue-500' :
                      activity.type === 'attendance' ? 'bg-green-500' :
                      activity.type === 'grade' ? 'bg-purple-500' :
                      'bg-red-500'
                    }`}></span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.activity}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {childData.upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{event.event}</p>
                    <p className="text-sm text-gray-500">{event.date} at {event.time}</p>
                  </div>
                  <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700">
                    Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
