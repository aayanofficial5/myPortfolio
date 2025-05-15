import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ type, title, date, description }) => {
  const Icon = type === 'work' ? Briefcase : GraduationCap;

  return (
    <div className="mb-10 ml-6 relative">
      <span className="absolute -left-3 top-1.5 bg-accent rounded-full p-1.5">
        <Icon className="text-white w-4 h-4" />
      </span>
      <div className="bg-gray-50 dark:bg-primary p-5 rounded-lg shadow">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{date}</p>
        <p className="text-gray-700 dark:text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
