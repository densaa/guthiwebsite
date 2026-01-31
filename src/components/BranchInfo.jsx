import { Phone, MapPin, Clock } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const BranchInfo = ({ branch }) => {
  const { isDark } = useTheme();
  const infoItems = [
    { icon: <Phone size={18} className="text-orange-500" />, label: "Contact", value: branch.contact || "9841123456" },
    { icon: <MapPin size={18} className="text-orange-500" />, label: "Address", value: branch.address || "N/A" },
    { icon: <Clock size={18} className="text-orange-500" />, label: "Hours", value: branch.hours || "N/A" },
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start p-8 rounded-xl transition-colors ${isDark ? "bg-[#1f2937]" : "bg-[#fdfaf5]"}`}>
      {/* Image */}
      <img
        src={branch.image || "https://via.placeholder.com/600x400"}
        alt={branch.name}
        className="w-full h-[400px] object-cover rounded-xl shadow-sm"
      />

      {/* Info Card */}
      <div className={`p-8 rounded-2xl shadow-sm border w-full transition-colors ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
        <h2 className={`text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-800"}`}>{branch.name}</h2>

        <div className="space-y-3">
          {infoItems.map((item, idx) => (
            <div key={idx} className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${isDark ? "bg-gray-700/50" : "bg-gray-50"}`}>
              <div className={`p-2 rounded-lg shadow-sm ${isDark ? "bg-gray-800" : "bg-white"}`}>
                {item.icon}
              </div>
              <div>
                <p className={`text-xs font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>{item.label}</p>
                <p className={`text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-700"}`}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 w-full bg-[#d9e8f5] hover:bg-[#c6d9eb] text-[#3b7197] font-bold py-3 rounded-xl transition-colors">
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default BranchInfo;