import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { CalendarDays, MessageSquare } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
import Slide1 from "../images/Slide1.jpg";
import Slide2 from "../images/Slide2.jpg";
import Slide3 from "../images/Slide3.jpg";


const SLIDE_CONTENT = [
  {
    image: Slide1,
    title: "Keeping Traditions Alive",
    desc:
      "Through the protection of guthi lands and religious trusts, we strengthen communities and preserve our living traditions.",
  },
  {
    image: Slide2,
    title: "Preserving Heritage",
    desc:
      "As guardians of Nepal's spiritual legacy, we conserve temples and organize traditional jatras and festivals.",
  },
  {
    image: Slide3,
    title: "Guardians of Rituals",
    desc:
      "Safeguarding the continuity of centuries-old practices that shape the unique identity of Nepal.",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative  w-full overflow-hidden bg-black">

      {/* ================= SLIDER ================= */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {SLIDE_CONTENT.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative flex h-full items-end justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative z-10 mb-20 w-full max-w-4xl px-6 text-center text-white">
                <h2 className="mb-3 text-6xl font-bold uppercase md:text-7xl">
                  {slide.title}
                </h2>
                <p className="mx-auto max-w-4xl text-base opacity-90 md:text-lg">
                  {slide.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ================= FLOATING BUTTONS ================= */}
      <div className="absolute right-6 top-24 z-20 flex flex-col gap-3">

        {/* Calendar */}
        <Link to="/calendar" className="group flex items-center">
          <span className="mr-2 rounded bg-white px-3 py-1 text-sm font-medium text-black opacity-0 shadow transition-all duration-300 group-hover:opacity-100">
            Calendar
          </span>
          <div className="flex h-12 w-12 items-center justify-center rounded bg-orange-500 text-white shadow-lg hover:bg-orange-600">
            <CalendarDays size={22} />
          </div>
        </Link>

        {/* Complaint */}
        <Link to="/complaint" className="group flex items-center">
          <span className="mr-2 rounded bg-white px-3 py-1 text-sm font-medium text-black opacity-0 shadow transition-all duration-300 group-hover:opacity-100">
            Complaint
          </span>
          <div className="flex h-12 w-12 items-center justify-center rounded bg-orange-500 text-white shadow-lg hover:bg-orange-600">
            <MessageSquare size={22} />
          </div>
        </Link>

      </div>

      {/* ================= SWIPER STYLES ================= */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          transform: scale(0.6);
        }
        .swiper-pagination-bullet {
          background: white !important;
        }
        .swiper-pagination {
          bottom: 30px !important;
        }
      `}</style>

    </section>
  );
};

export default HeroSlider;
