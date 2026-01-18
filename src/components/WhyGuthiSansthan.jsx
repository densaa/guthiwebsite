import React from "react";
import templeImg from "../assets/temple.png";
import { useTheme } from "../context/ThemeContext";

const WhyGuthiSansthan = () => {
  const { isDark } = useTheme();

  return (
    <section className={`${isDark ? "bg-transparent text-white" : "bg-[#f6e9da] text-gray-900"} py-16 px-6 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Why Guthi Sansthan
          </h2>
          <p className={`mt-3 ${isDark ? "text-gray-300" : "text-gray-700"} max-w-2xl mx-auto`}>
            Preserving Nepal’s cultural heritage, festivals, and community
            resources for generations to come.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div>
            <img
              src={templeImg}
              alt="Nepal Heritage Temple"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-lg">
                Cultural Preservation
              </h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"} mt-2`}>
                We safeguard temples, historic sites, and traditional festivals,
                keeping Nepal’s rich heritage alive.
              </p>
              <hr className="mt-4 border-gray-400" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Festival & Jatra Management
              </h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"} mt-2`}>
                Organizing major religious and cultural events like Indra Jatra,
                Rato Machhindranath Jatra, and Teej celebrations.
              </p>
              <hr className="mt-4 border-gray-400" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Community Service
              </h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"} mt-2`}>
                Assisting local communities in rituals, temple activities, and
                social programs to maintain traditional practices.
              </p>
              <hr className="mt-4 border-gray-400" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Guthi Land Administration
              </h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"} mt-2`}>
                Managing Guthi-owned lands, leases, and property-related matters
                to fund cultural and community initiatives.
              </p>
              <hr className="mt-4 border-gray-400" />
            </div>

          </div>
        </div>

        {/* Latest Update */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold">
            Latest Update
          </h3>
          <p className={`mt-3 ${isDark ? "text-gray-300" : "text-gray-700"} max-w-2xl mx-auto`}>
            Stay informed and explore photos, announcements, news, and articles
            from Guthi Sansthan’s activities and heritage events.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyGuthiSansthan;
