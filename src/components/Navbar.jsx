import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ChevronDown, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  const navItem =
    "flex items-center gap-1 cursor-pointer hover:text-500 transition-colors";

  const dropdownBox =
    "absolute top-full w-56 bg-white border border-gray-200 rounded-md  z-50 pointer-events-auto";

  const dropdownItem =
    "block px-[16px] py-[4px] text-sm hover:bg-gray-100";

  return (
    <header
      className={`w-full border-b shadow-sm ${isDark
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-gray-800 border-gray-200"
        }`}
    >
      <nav className="max-w-[1600px] mx-auto px-6 py-2">
        <ul className="flex items-center justify-around font-medium relative">

          {/* Logo */}
          <li>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-20 h-20" />
            </Link>
          </li>

          <li><Link to="/" className={navItem}>Home</Link></li>

          {/* Services */}
          <li className="relative group">
            <span className={navItem}>
              Services <ChevronDown size={14} />
            </span>
            <ul className={`${dropdownBox} hidden group-hover:block group-focus-within:block`}>
              <li><Link to="/recommended-home" className={dropdownItem}>Recommended Home</Link></li>
              <li><Link to="/map" className={dropdownItem}>Map</Link></li>
              <li><Link to="/file-tracking" className={dropdownItem}>File Tracking System</Link></li>
            </ul>
          </li>

          {/* Branches */}
          <li className="relative group">
            <span className={navItem}>
              Branches <ChevronDown size={14} />
            </span>
            <ul className={`${dropdownBox} hidden group-hover:block group-focus-within:block`}>
              <li><Link to="/branches/bhaktapur" className={dropdownItem}>Branch Office Bhaktapur</Link></li>
              <li><Link to="/branches/lalitpur" className={dropdownItem}>Branch Office Lalitpur</Link></li>
              <li><Link to="/branches/tripureshwor" className={dropdownItem}>Branch Office Tripureshwor</Link></li>
            </ul>
          </li>

          <li><Link to="/notice" className={navItem}>Notice</Link></li>
          <li><Link to="/article" className={navItem}>Article</Link></li>

          {/* Vacancy */}
          <li className="relative group">
            <span className={navItem}>
              Vacancy <ChevronDown size={14} />
            </span>
            <ul className={`${dropdownBox} hidden group-hover:block group-focus-within:block`}>
              <li><Link to="/vacancy" className={dropdownItem}>Vacancy</Link></li>
              <li><Link to="/result" className={dropdownItem}>Result</Link></li>
            </ul>
          </li>

          {/* Rules */}
          <li className="relative group">
            <span className={navItem}>
              Rules / Regulations <ChevronDown size={14} />
            </span>
            <ul className={`${dropdownBox} hidden group-hover:block group-focus-within:block`}>
              <li><Link to="/yearly-budget" className={dropdownItem}>Yearly Budget</Link></li>
              <li><Link to="/circular" className={dropdownItem}>Circular</Link></li>
              <li><Link to="/acts-laws" className={dropdownItem}>Acts & Laws</Link></li>
            </ul>
          </li>

          {/* Festival */}
          <li className="relative group">
            <span className={navItem}>
              Festival <ChevronDown size={14} />
            </span>
            <ul className={`${dropdownBox} hidden group-hover:block group-focus-within:block`}>
              <li><Link to="/seto-machindranath" className={dropdownItem}>Seto Machindranath</Link></li>
            </ul>
          </li>

          <li><Link to="/cultural" className={navItem}>Cultural</Link></li>
          <li><Link to="/about" className={navItem}>About</Link></li>
          <li><Link to="/contact" className={navItem}>Contact</Link></li>

          {/* Language UI */}
          <li className={navItem}>
            <Globe size={18} />
            English
          </li>

          {/* Dark mode */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
            </button>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Navbar;