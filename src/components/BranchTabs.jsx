import { useState } from "react";
import { FileText, Bell, Sparkles, Users } from "lucide-react";
import Employees from "./Employees";
import { useTheme } from "../context/ThemeContext";

const tabs = [
  { id: "Articles", icon: <FileText size={18} /> },
  { id: "Notices", icon: <Bell size={18} /> },
  { id: "Festivals", icon: <Sparkles size={18} /> },
  { id: "Employees", icon: <Users size={18} /> },
];

const BranchTabs = ({ employees = [] }) => {
  const { isDark } = useTheme();
  const [active, setActive] = useState("Employees");

  return (
    <div className="mt-12">
      {/* Tab Buttons - Left Aligned as requested */}
      <div className="flex flex-wrap justify-start gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg border-2 transition-all font-medium ${active === tab.id
                ? "bg-[#ee7a46] border-[#ee7a46] text-white shadow-md"
                : `bg-transparent border-[#ee7a46] text-[#ee7a46] ${isDark ? "hover:bg-gray-800" : "hover:bg-orange-50"}`
              }`}
          >
            {tab.icon}
            {tab.id}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="text-left mb-10">
        <h3 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>Our Teams</h3>
        <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Explore our updates and events in the guthi team</p>
      </div>

      <div className="min-h-[300px]">
        {active === "Employees" ? (
          <Employees data={employees} />
        ) : (
          <div className="text-center py-20 text-gray-400">No data available for {active}</div>
        )}
      </div>
    </div>
  );
};

export default BranchTabs;