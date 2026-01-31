import Navbar from "../components/Navbar";
import NoticesBar from "../components/NoticesBar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { useLocation, Link } from "react-router-dom";
import { CalendarDays, MessageSquare, FileText, LayoutGrid, Globe, User, RotateCcw } from "lucide-react";

const MainLayout = ({ children }) => {
  const { isDark } = useTheme();
  const location = useLocation();

  // Hide marquee ONLY on contact page
  const hideNoticesBar = location.pathname === "/contact";

  return (
    <div
      className={`relative ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
    >
      <Navbar />

      {/* NoticesBar (Marquee) */}
      {!hideNoticesBar && <NoticesBar />}

      {/* Floating Buttons Sidebar - Matching the image exactly */}
      <div className="fixed right-4 top-1/4 z-50 flex flex-col items-center gap-1">
        {/* Main Orange Actions */}
        <div className="flex flex-col gap-1 mb-6">
          {/* Calendar */}
          <Link
            to="/calendar"
            className="group flex h-9 w-9 items-center justify-center rounded bg-white text-orange-500 shadow border border-gray-100 transition-all hover:scale-110"
            title="Calendar"
          >
            <CalendarDays size={18} />
          </Link>

          {/* Complaint */}
          <Link
            to="/complaint"
            className="group flex h-9 w-9 items-center justify-center rounded bg-white text-orange-500 shadow border border-gray-100 transition-all hover:scale-110"
            title="Complaint"
          >
            <MessageSquare size={18} />
          </Link>
        </div>

        {/* Circular Utility Icons */}
        <div className="flex flex-col gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-400 border border-gray-100 shadow-sm hover:text-blue-500 transition-colors">
            <FileText size={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-400 border border-gray-100 shadow-sm hover:text-blue-500 transition-colors">
            <LayoutGrid size={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-400 border border-gray-100 shadow-sm hover:text-blue-500 transition-colors">
            <Globe size={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-400 border border-gray-100 shadow-sm hover:text-blue-500 transition-colors">
            <User size={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-400 border border-gray-100 shadow-sm hover:text-blue-500 transition-colors">
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
