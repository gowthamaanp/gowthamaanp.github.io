"use client";
import { ISkillCategory } from "@/interface/skills";
import { Tag } from "@/components/common";
import { useState } from "react";
import {
  FiCode,
  FiGlobe,
  FiPackage,
  FiTool,
  FiDatabase,
  FiCpu,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const categoryIcons: Record<string, any> = {
  Programming: FiCode,
  "Web Technologies": FiGlobe,
  "Frameworks and Libraries": FiPackage,
  "Software and Tools": FiTool,
  Database: FiDatabase,
  default: FiCpu,
};

const SkillCategory = ({ category, skills }: ISkillCategory) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = categoryIcons[category] || categoryIcons.default;

  return (
    <div className="group border-b-2 border-gray-300 dark:border-gray-700 pb-6 transition-all duration-300 fade-in">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between gap-3 mb-4 hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-blue-400/20 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
            <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {category}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {skills.length} {skills.length === 1 ? "skill" : "skills"}
            </p>
          </div>
        </div>
        <div className="text-gray-400 dark:text-gray-500">
          {isExpanded ? (
            <FiChevronUp className="w-5 h-5" />
          ) : (
            <FiChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-wrap gap-2 pl-0 md:pl-13">
          {skills.map((skill, index) => (
            <Tag key={index} label={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;
