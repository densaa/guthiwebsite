import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

// Images
import fileTrackingImg from "../services/filetracking.png";
import recommendedHomeMapImg from "../services/recommended-home-map.png";
import kotwaliImg from "../services/kotwali.png";

export default function Services() {
  const sliderRef = useRef(null);
  const { isDark } = useTheme();

  const services = [
    {
      title: "Recommended Home Map",
      description:
        "Guide to recommended Guthi locations on map for easy property discovery.",
      image: recommendedHomeMapImg,
      link: "/recommended-home",
    },
    {
      title: "File Tracking System",
      description:
        "Track the status of your submitted files or applications online.",
      image: fileTrackingImg,
      link: "/file-tracking",
    },
    {
      title: "Kotwali Receipt Verification",
      description:
        "Check and verify your Kotwali/Guthi payment receipt online.",
      image: kotwaliImg,
      link: "/kotwali-verification",
    },
  ];

  // duplicate for infinite scroll
  const items = [...services, ...services];

  // AUTO SCROLL LOGIC (THIS IS THE KEY)
  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;

    const scroll = () => {
      if (!slider) return;

      slider.scrollLeft += 0.5; // speed

      // reset for infinite loop
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className={`${isDark ? "bg-transparent text-white" : "bg-[#f8efe4] text-gray-800"} py-16 transition-colors duration-300`}>
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-semibold mb-3">Services</h2>
        <p className={`max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          Supporting communities with trusted and time-honored practices.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className={`${isDark ? "bg-gray-700" : "bg-white"} rounded-2xl shadow-lg p-6 transition-colors duration-300`}>
          <div
            ref={sliderRef}
            className="
              flex gap-6
              overflow-x-scroll
              scrollbar-hide
              cursor-grab
              py-4
            "
          >
            {items.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="
                  min-w-[85%]
                  sm:min-w-[60%]
                  md:min-w-[45%]
                  lg:min-w-[30%]
                  relative
                  h-56 sm:h-64 md:h-72 lg:h-80
                  rounded-xl
                  overflow-hidden
                  flex-none
                  group
                  shadow-md
                "
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
