// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

const PlainLayout = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PlainLayout;


