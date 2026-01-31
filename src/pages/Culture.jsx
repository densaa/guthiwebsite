import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import heroImg from "../assets/cultural/hero.png";
import about1 from "../assets/cultural/about1.png";
import about2 from "../assets/cultural/about2.png";
import about3 from "../assets/cultural/about3.png";

import g1 from "../assets/cultural/gallery1.png";
import g2 from "../assets/cultural/gallery2.png";
import g3 from "../assets/cultural/gallery3.png";
import g4 from "../assets/cultural/gallery4.png";
import g5 from "../assets/cultural/gallery5.png";
import g6 from "../assets/cultural/gallery6.png";
import g7 from "../assets/cultural/gallery7.png";

import bhaktapur from "../assets/cultural/bhaktapur.png";
import patan from "../assets/cultural/patan.png";
import kathmandu from "../assets/cultural/kathmandu.png";
import lumbini from "../assets/cultural/lumbini.png";
import swayambhu from "../assets/cultural/swam.jpg";
import pashupati from "../assets/cultural/pashupatinath.jpg";

import f1 from "../assets/cultural/bisket.png";
import f2 from "../assets/cultural/indrajatra.png";
import f3 from "../assets/cultural/gaijatra.png";
import f4 from "../assets/cultural/ratomachindranath.jpg";
import f5 from "../assets/cultural/seto.png";

export default function Culture() {
  const galleryRef = useRef(null);
  const festivalRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="bg-[#f8efe4]">

      {/* ===== Page Header ===== */}
      <section className="bg-[#f6efe6] border-b">
        <div className="max-w-7xl mx-auto py-10 text-center">
          <h1 className="text-2xl font-semibold">Cultural Heritage</h1>
          <p className="mt-2 text-sm text-gray-600">
            We are here to assist you in cultural services, festivals, and heritage preservation.
          </p>
        </div>
      </section>

      {/* ===== Hero ===== */}
      <section
        className="relative h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4">
          <div className="text-white max-w-xl">
            <h2 className="text-3xl font-bold mb-3">
              CULTURAL HERITAGE OF NEPAL
            </h2>
            <p className="text-sm mb-6">
              Preserving Nepal’s temples, festivals, and traditions for generations to come.
            </p>
            <button className="bg-orange-500 px-6 py-2 rounded text-sm font-medium">
              Explore Heritage Sites →
            </button>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">About Our Heritage</h3>
          <p className="text-sm text-gray-700 mb-4">
            Guthi Sansthan has been safeguarding Nepal’s rich cultural and religious heritage for decades.
          </p>
          <p className="text-sm text-gray-700">
            Nepal’s heritage reflects ethnic diversity and spiritual systems rooted in Hindu and Buddhist philosophies.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src={about1} className="h-56 w-full object-cover rounded-lg" />
          <img src={about2} className="h-56 w-full object-cover rounded-lg" />
          <img src={about3} className="h-56 w-full object-cover rounded-lg col-span-2" />
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h3 className="text-xl font-semibold mb-6">Gallery</h3>

        <div className="relative">
          <div
            ref={galleryRef}
            className="flex gap-4 overflow-x-auto scroll-smooth"
          >
            {[g1, g2, g3, g4, g5, g6, g7].map((img, i) => (
              <img
                key={i}
                src={img}
                className="min-w-[260px] h-44 rounded-lg object-cover"
              />
            ))}
          </div>

          <button
            onClick={() => scrollLeft(galleryRef)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scrollRight(galleryRef)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* ===== Explore Nepal’s Cultural Heritage (MORE HEIGHT) ===== */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h3 className="text-2xl font-semibold mb-8">
          Explore Nepal’s Cultural Heritage
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: bhaktapur, title: "Bhaktapur Durbar Square" },
            { img: patan, title: "Patan Durbar Square" },
            { img: kathmandu, title: "Kathmandu Durbar Square" },
            { img: lumbini, title: "Lumbini" },
            { img: swayambhu, title: "Swayambhunath Stupa (Monkey Temple)" },
            { img: pashupati, title: "Pashupatinath Temple" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative h-[420px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.img}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <h4 className="absolute bottom-6 left-6 text-white font-semibold text-base">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Our Festivals ===== */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <h3 className="text-2xl font-semibold mb-10">Our Festivals</h3>

        <div className="relative flex items-center">
          <button
            onClick={() => scrollLeft(festivalRef)}
            className="mr-4 border border-blue-600 text-blue-600
                       bg-white p-3 rounded-full shadow hover:bg-blue-50"
          >
            <ChevronLeft />
          </button>

          <div
            ref={festivalRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4"
          >
            {[
              { img: f4, title: "Rato Machindranath Jatra" },
              { img: f5, title: "Seto Machindranath Jatra" },
              { img: f1, title: "Bisket Jatra" },
              { img: f2, title: "Indra Jatra" },
              { img: f3, title: "Gai Jatra" },
            ].map((item, i) => (
              <div
                key={i}
                className="min-w-[440px] h-[400px] relative rounded-xl overflow-hidden"
              >
                <img src={item.img} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <h4 className="text-white text-lg font-semibold">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollRight(festivalRef)}
            className="ml-4 border border-blue-600 text-blue-600
                       bg-white p-3 rounded-full shadow hover:bg-blue-50"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

    </div>
  );
}
