// Components
import Navbar from "../components/Navbar";
import NoticesBar from "../components/NoticesBar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const { isDark } = useTheme();
  const location = useLocation();

  // Hide marquee ONLY on contact page
  const hideNoticesBar = location.pathname === "/contact";

  return (
    <div
      className={` ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <Navbar />

      {/* NoticesBar (Marquee) */}
      {!hideNoticesBar && <NoticesBar />}

      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;
