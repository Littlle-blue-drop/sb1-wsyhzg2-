import React from 'react';
import { PenTool, Clock, BookOpen } from 'lucide-react';

const StudentDashboard = () => {
  const tasks = [
    {
      id: 1,
      title: "Academic Essay Writing",
      description: "Practice writing a 500-word academic essay on environmental conservation",
      deadline: "2024-03-25",
      status: "pending"
    },
    {
      id: 2,
      title: "Business Email Composition",
      description: "Write a professional email requesting a business meeting",
      deadline: "2024-03-20",
      status: "completed"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Student!</h1>
        <p className="mt-2 text-gray-600">Track your writing progress and complete assignments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center">
            <PenTool className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Active Tasks</h2>
              <p className="text-3xl font-bold text-blue-600">3</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Hours Practiced</h2>
              <p className="text-3xl font-bold text-green-600">12</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Completed Tasks</h2>
              <p className="text-3xl font-bold text-purple-600">8</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Writing Tasks</h2>
        </div>
        <div className="divide-y">
          {tasks.map((task) => (
            <div key={task.id} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{task.description}</p>
                  <p className="mt-2 text-sm text-gray-500">Due: {task.deadline}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    task.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </span>
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Start Writing
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;