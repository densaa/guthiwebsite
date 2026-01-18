import { FiImage, FiAlertCircle, FiFileText } from "react-icons/fi";
import { HiOutlineScale } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import meetingOne from "../assets/meetingone.png";
import meetingTwo from "../assets/meetingtwo.png";
import meetingThree from "../assets/meetingthree.png";
import meetingFour from "../assets/meetingfour.png";

const LatestUpdate = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <section className={`${isDark ? "bg-transparent" : "bg-[#fff3e6]"} py-14 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Tabs */}
        <div className={`${isDark ? "bg-gray-700" : "bg-white"} rounded-xl shadow-md p-6 mb-14 transition-colors duration-300`}>
          <div className="flex gap-5">
            <button className="flex items-center gap-2 px-7 py-3 rounded-md bg-orange-500 text-white">
              <FiImage /> Gallery
            </button>

            <button className="flex items-center gap-2 px-7 py-3 rounded-md border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              <FiAlertCircle /> Notices
            </button>

            <button className="flex items-center gap-2 px-7 py-3 rounded-md border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              <FiFileText /> News & Article
            </button>

            <button className="flex items-center gap-2 px-7 py-3 rounded-md border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              <HiOutlineScale /> Laws and Enforcement
            </button>
          </div>
        </div>

        {/* Preview Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <img src={meetingOne} className="rounded-xl shadow-md" />
          <img src={meetingTwo} className="rounded-xl shadow-md" />
          <img src={meetingThree} className="rounded-xl shadow-md" />

          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img src={meetingFour} />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <button
                onClick={() => navigate("/gallery")}
                className="text-white font-medium text-lg"
              >
                View more photos →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestUpdate;
