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
      <div className="absolute right-6 top-50 z-20 flex flex-col items-end gap-2">
             {/* Calendar */}
             <Link
               to="/calendar"
               className="group flex h-9 w-9 items-center overflow-hidden rounded-md bg-white text-orange-500 shadow-md transition-all duration-300 hover:w-28 hover:scale-105"
             >
               {/* Icon Container - Scaled down to 18px */}
               <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center">
                 <CalendarDays size={18} />
               </div>
     
               {/* Text - Smaller text (text-xs) to fit the compact height */}
               <span className="whitespace-nowrap pr-3 text-xs  text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                 Calendar
               </span>
             </Link>
     
             {/* Complaint */}
             <Link
               to="/complaint"
               className="group flex h-9 w-9 items-center overflow-hidden rounded-md bg-white text-orange-500 shadow-md transition-all duration-300 hover:w-28 hover:scale-105"
             >
               <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center">
                 <MessageSquare size={18} />
               </div>
     
               <span className="whitespace-nowrap pr-3 text-xs  text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                 Complaint
               </span>
             </Link>
           </div>

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
