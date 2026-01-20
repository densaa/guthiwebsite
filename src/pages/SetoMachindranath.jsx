import { useState, useRef } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

import heroImg from "../assets/festivals/hero.png";
import f1 from "../assets/festivals/1.png";
import f2 from "../assets/festivals/2.png";
import f3 from "../assets/festivals/3.png";
import f4 from "../assets/festivals/4.png";

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
    <div className="bg-[#fff3e6]">

      {/* HEADER */}
      <div className="bg-[#fff7ee] py-10 text-center shadow-sm w-full transform -translate-y-[10%]">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-semibold mb-2">Jatra and Parva</h1>
          <p className="text-gray-600">
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
          <h2 className="text-2xl font-semibold mb-4">
            Seto Machindranath Jatra
          </h2>

          <div className="text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>2082-12-12</span>
            </div>

            <div className="flex items-center gap-1 mt-2">
              <MapPin size={14} />
              <span>Kathmandu</span>
            </div>
          </div>

          <p className="text-gray-700 mb-10">
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
        <h3 className="text-xl font-semibold mb-6">Our festivals</h3>

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

                <div className="absolute bottom-0 left-0 right-0 text-white p-3 bg-black/40 rounded-b-lg">
                  <h3 className="text-xl font-bold truncate drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="truncate drop-shadow-lg">
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
      <div className="flex flex-col gap-4 p-3 md:px-34 mb-8 mt-16">
        <h1 className="text-gray-700 dark:text-gray-300 text-xl">Latest Articles</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4"></div>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8 mb-8 select-none">
          <button disabled className="px-2 sm:px-3 py-1 md:py-1 text-[10.74px] md:text-[16px] border border-secondary-dark/30 bg-white disabled:opacity-60 text-black/70">&lt; Prev</button>
          <div>
            <button className="px-2 sm:px-3 py-1 border border-secondary-dark/30 text-xs sm:text-base bg-secondary/20 dark:bg-white/50 dark:text-white">1</button>
          </div>
          <button disabled className="px-2 sm:px-3 py-1 md:py-1 text-xs text-[10.74px] md:text-[16px] border border-secondary-dark/30 bg-white disabled:opacity-60 text-black/70">Next &gt;</button>
        </div>
      </div>

    </div>
  );
};

export default SetoMachindranath;
