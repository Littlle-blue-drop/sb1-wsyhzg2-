import React from 'react';
import { Users, CheckCircle, BarChart3 } from 'lucide-react';
import StatCard from '../../components/StatCard';

const TeacherDashboard = () => {
  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      progress: 85,
      tasksCompleted: 12,
      lastSubmission: "2024-03-15"
    },
    {
      id: 2,
      name: "Bob Smith",
      progress: 65,
      tasksCompleted: 8,
      lastSubmission: "2024-03-14"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
        <p className="mt-2 text-gray-600">Monitor student progress and review submissions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Students"
          value={24}
          icon={Users}
          bgColor="bg-blue-50"
          iconColor="text-blue-600"
        />
        <StatCard
          title="Submissions Today"
          value={8}
          icon={CheckCircle}
          bgColor="bg-green-50"
          iconColor="text-green-600"
        />
        <StatCard
          title="Average Score"
          value="78%"
          icon={BarChart3}
          bgColor="bg-purple-50"
          iconColor="text-purple-600"
        />
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Student Progress</h2>
        </div>
        <div className="divide-y">
          {students.map((student) => (
            <div key={student.id} className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{student.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Last submission: {student.lastSubmission}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {student.tasksCompleted} tasks completed
                  </div>
                  <div className="mt-1">
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                            Progress: {student.progress}%
                          </span>
                        </div>
                      </div>
                      <div className="flex h-2 mb-4 overflow-hidden bg-blue-100 rounded">
                        <div
                          style={{ width: `${student.progress}%` }}
                          className="flex flex-col justify-center bg-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  View Details
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Send Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;