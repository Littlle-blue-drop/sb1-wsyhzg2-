import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, bgColor, iconColor }) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg`}>
      <div className="flex items-center">
        <Icon className={`h-8 w-8 ${iconColor}`} />
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className={`text-3xl font-bold ${iconColor}`}>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;