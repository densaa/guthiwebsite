import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// IMPORT IMAGES (from src/images)
import Slide1 from "../images/Slide1.jpg";
import Slide2 from "../images/Slide2.jpg";
import Slide3 from "../images/Slide3.jpg";

// SLIDE DATA
const slides = [
  {
    image: Slide1,
    title: "KEEPING TRADITIONS ALIVE",
    description:
      "Through the protection of guthi lands, support for religious trusts, and preservation of rituals, Guthi Sansthan strengthens communities and keeps our living traditions alive.",
  },
  {
    image: Slide2,
    title: "PRESERVING HERITAGE, PROTECTING CULTURE",
    description:
      "Guthi Sansthan is the guardian of Nepal's cultural and spiritual legacy. From conserving temples and monasteries to organizing jatras and traditional festivals.",
  },
  {
    image: Slide3,
    title: "GUARDIANS OF FESTIVALS & RITUALS",
    description:
      "We safeguard the continuity of centuries-old jatras, festivals, and cultural practices that shape Nepal's unique identity.",
  },
];

function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      {/* Custom navigation buttons (Tailwind only) */}
      <button
        ref={prevRef}
        aria-label="Previous"
        className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-white/40 text-white bg-transparent hover:bg-white/5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        ref={nextRef}
        aria-label="Next"
        className="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-white/40 text-white bg-transparent hover:bg-white/5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          // attach custom navigation elements
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevRef.current;
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* BACKGROUND IMAGE */}
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* TEXT CONTENT */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-4xl px-6 md:px-16 text-white">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
