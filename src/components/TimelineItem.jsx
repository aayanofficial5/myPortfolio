import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const TimelineItem = ({ item }) => {
  return (
    <div className="mb-10 ml-6 flex items-center">
      <span className="absolute -left-5 bg-secondary rounded-full pt-1.5 px-1.5">
        {item.type === "work" ? (
          <button title="Work">
            <Briefcase className="text-primary ml-0.5 mt-0.5 w-5.5 h-5.5" />
          </button>
        ) : (
          <button title="Education">
            <GraduationCap className="text-primary w-6 h-6" />
          </button>
        )}
      </span>
      <div className="bg-accent dark:bg-accent p-5 rounded-lg shadow w-full">
        <h3 className="font-semibold text-lg text-primary dark:text-primary opacity-90">
          {item.title}
        </h3>
        <p className="text-sm text-primary dark:text-primary opacity-60 mb-2">
          {item.date}
        </p>
        <p className="text-gray-700 dark:text-ternary opacity-60">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
