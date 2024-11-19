import React from 'react';
import { FileText, Users, Activity } from 'lucide-react';
import StatCard from '../../components/StatCard';

const AdminDashboard = () => {
  const materials = [
    {
      id: 1,
      title: "Advanced Essay Writing Guide",
      type: "Writing Guide",
      lastUpdated: "2024-03-15",
      status: "published"
    },
    {
      id: 2,
      title: "Business Communication Templates",
      type: "Templates",
      lastUpdated: "2024-03-14",
      status: "draft"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage learning materials and system settings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Materials"
          value={15}
          icon={FileText}
          bgColor="bg-blue-50"
          iconColor="text-blue-600"
        />
        <StatCard
          title="Active Users"
          value={156}
          icon={Users}
          bgColor="bg-green-50"
          iconColor="text-green-600"
        />
        <StatCard
          title="System Status"
          value="Healthy"
          icon={Activity}
          bgColor="bg-purple-50"
          iconColor="text-purple-600"
        />
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Learning Materials</h2>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add New Material
          </button>
        </div>
        <div className="divide-y">
          {materials.map((material) => (
            <div key={material.id} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{material.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">Type: {material.type}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Last updated: {material.lastUpdated}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    material.status === 'published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {material.status.charAt(0).toUpperCase() + material.status.slice(1)}
                </span>
              </div>
              <div className="mt-4 flex space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Edit
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Preview
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;