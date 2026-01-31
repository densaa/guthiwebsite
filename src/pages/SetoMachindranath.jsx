import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

import heroImg from "../assets/festivals/hero.png";
import f1 from "../assets/festivals/1.png";
import f2 from "../assets/festivals/2.png";
import f3 from "../assets/festivals/3.png";
import f4 from "../assets/festivals/4.png";
import { useRef, useState } from "react";

const festivals = [
  {
    title: "Seto Machindranath Jatra",
    desc: "A grand chariot procession in Kathmandu.",
    img: f1,
  },
  {
    title: "Seto Machindranath Jatra",
    desc: "A grand chariot procession in Kathmandu.",
    img: f2,
  },
  {
    title: "Seto Machindranath Jatra",
    desc: "A grand chariot procession in Kathmandu.",
    img: f3,
  },
  {
    title: "Seto Machindranath Jatra",
    desc: "A grand chariot procession in Kathmandu.",
    img: f4,
  },
];

const CARD_WIDTH = 395;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;

const SetoMachindranath = () => {
  const { isDark } = useTheme();
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef(null);

  const totalWidth = festivals.length * STEP;

  const getMaxOffset = () => {
    if (!sliderRef.current) return 0;
    const containerWidth = sliderRef.current.offsetWidth;
    return Math.max(0, totalWidth - containerWidth);
  };

  const prev = () => {
    setOffset((prev) => Math.max(prev - STEP, 0));
  };

  const next = () => {
    const maxOffset = getMaxOffset();
    setOffset((prev) => Math.min(prev + STEP, maxOffset));
  };

  return (
    <div className={`transition-colors min-h-screen ${isDark ? "bg-[#111827] text-gray-100" : "bg-[#fff3e6] text-gray-800"}`}>

      {/* HEADER */}
      <div className={`py-12 text-center border-b transform -translate-y-[10%] w-full transition-colors ${isDark ? "bg-[#1f2937] border-gray-700 shadow-lg" : "bg-[#fff7ee] border-gray-200 shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h1 className={`text-4xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}>Jatra and Parva</h1>
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Explore our updates and events in the guthi team
          </p>
        </div>
      </div>

      {/* FEATURE */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src={heroImg}
          alt="Seto Machindranath Jatra"
          className="rounded-xl shadow-md w-full h-[360px] object-cover"
        />

        <div>
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
            Seto Machindranath Jatra
          </h2>

          <div className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>2082-12-12</span>
            </div>

            <div className="flex items-center gap-1 mt-2">
              <MapPin size={14} />
              <span>Kathmandu</span>
            </div>
          </div>

          <p className={`${isDark ? "text-gray-300" : "text-gray-700"} text-lg leading-relaxed`}>
            A grand chariot procession in Kathmandu.
          </p>

          {/* VIEW BUTTON LOWER */}
          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm">
            View Full Article →
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className={`text-2xl font-bold mb-8 ${isDark ? "text-white" : "text-gray-800"}`}>Our festivals</h3>

        <div ref={sliderRef} className="relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {festivals.map((item, i) => (
              <div
                key={i}
                className="
                  flex-shrink-0
                  w-[195px] h-[222px]
                  md:w-[395px] md:h-[450px]
                  relative cursor-pointer
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />

                <div className={`absolute bottom-0 left-0 right-0 text-white p-5 rounded-b-lg ${isDark ? "bg-black/60" : "bg-black/40"}`}>
                  <h3 className="text-xl font-bold truncate drop-shadow-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="truncate drop-shadow-lg text-sm text-gray-200">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* EXACT ARROWS */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
                       w-8 h-8 rounded-full bg-blue-600
                       items-center justify-center"
          >
            <ChevronLeft size={16} className="text-white" />
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
                       w-8 h-8 rounded-full bg-blue-600
                       items-center justify-center"
          >
            <ChevronRight size={16} className="text-white" />
          </button>
        </div>
      </div>

      {/* LATEST ARTICLES */}
      <div className="flex flex-col gap-4 p-3 md:px-34 mb-20 mt-16 max-w-7xl mx-auto w-full">
        <h1 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>Latest Articles</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6"></div>
        <div className="flex flex-wrap justify-center items-center gap-3 mt-12 select-none">
          <button disabled className={`px-4 py-2 border rounded transition-all disabled:opacity-40 ${isDark ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-white border-gray-300 text-gray-600"}`}>&lt; Prev</button>
          <div>
            <button className={`px-4 py-2 border rounded font-bold transition-all ${isDark ? "bg-blue-600 border-blue-500 text-white" : "bg-blue-100 border-blue-200 text-blue-700"}`}>1</button>
          </div>
          <button disabled className={`px-4 py-2 border rounded transition-all disabled:opacity-40 ${isDark ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-white border-gray-300 text-gray-600"}`}>Next &gt;</button>
        </div>
      </div>

    </div>
  );
};

export default SetoMachindranath;
