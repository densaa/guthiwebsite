import { useState } from "react";
import logo from "../assets/logo.png";
import { ChevronDown, Globe, Moon, Sun } from "lucide-react";

function Navbar() {
  const [lang, setLang] = useState("en");
  const [isDark, setIsDark] = useState(false);

  const menu = {
    en: {
      home: "Home",
      services: "Services",
      branches: "Branches",
      notice: "Notice",
      article: "Article",
      vacancy: "Vacancy",
      rules: "Rules/Regulations",
      festival: "Festival",
      cultural: "Cultural",
      about: "About",
      contact: "Contact",
    },
    np: {
      home: "गृहपृष्ठ",
      services: "सेवाहरू",
      branches: "शाखाहरू",
      notice: "सूचना",
      article: "लेख",
      vacancy: "दरखास्त",
      rules: "नियम/विनियम",
      festival: "चाडपर्व",
      cultural: "सांस्कृतिक",
      about: "हाम्रो बारे",
      contact: "सम्पर्क",
    },
  };

  const navItem =
    "flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors";

  return (
    <header
      className={`container w-full border-b shadow-sm transition-colors duration-300 ${
        isDark
          ? "bg-gray-900 border-gray-700 text-white"
          : "bg-white border-gray-200 text-gray-800"
      }`}
    >
      <nav
        className="max-w-[1600px] mx-auto flex items-center px-6 py-2"
        aria-label="Main Navigation"
      >
        
        <a href="/" className="mr-auto shrink-0">
          <img
            src={logo}
            alt="Company logo"
            className="w-16 h-16 object-contain"
          />
        </a>

        
        <ul className="flex items-center gap-5 text-base font-medium">
          <li><a href="#" className={navItem}>{menu[lang].home}</a></li>

          <li>
            <button type="button" className={navItem}>
              {menu[lang].services} <ChevronDown size={14} />
            </button>
          </li>

          <li>
            <button type="button" className={navItem}>
              {menu[lang].branches} <ChevronDown size={14} />
            </button>
          </li>

          <li><a href="#" className={navItem}>{menu[lang].notice}</a></li>
          <li><a href="#" className={navItem}>{menu[lang].article}</a></li>

          <li>
            <button type="button" className={navItem}>
              {menu[lang].vacancy} <ChevronDown size={14} />
            </button>
          </li>

          <li>
            <button type="button" className={navItem}>
              {menu[lang].rules} <ChevronDown size={14} />
            </button>
          </li>

          <li>
            <button type="button" className={navItem}>
              {menu[lang].festival} <ChevronDown size={14} />
            </button>
          </li>

          <li><a href="#" className={navItem}>{menu[lang].cultural}</a></li>
          <li><a href="#" className={navItem}>{menu[lang].about}</a></li>
          <li><a href="#" className={navItem}>{menu[lang].contact}</a></li>

          
          <li>
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "np" : "en")}
              className={`${navItem} ml-2`}
              aria-label="Change language"
            >
              <Globe size={18} />
              <span className="min-w-[60px] text-center">
                {lang === "en" ? "English" : "नेपाली"}
              </span>
            </button>
          </li>

          
          <li>
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
