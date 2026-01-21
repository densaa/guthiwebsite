import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { ChevronRight, ChevronLeft, Calendar, MessageSquare, LayoutGrid, Smile } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Cultural = () => {
    // Placeholder images matching the visual themes of the screenshot
    const galleryImages = [
        "https://images.unsplash.com/photo-1544283011-8fec05963f28?q=80&w=600",
        "https://images.unsplash.com/photo-1582650809083-d09667793574?q=80&w=600",
        "https://images.unsplash.com/photo-1524230613591-c12891316496?q=80&w=600",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600",
        "https://images.unsplash.com/photo-1627814897218-1e43926868af?q=80&w=600",
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=600"
    ];

    const heritageSites = [
        { name: "Bhaktapur Durbar Square", img: "https://images.unsplash.com/photo-1544283011-8fec05963f28?q=80&w=800" },
        { name: "Patan Durbar Square", img: "https://images.unsplash.com/photo-1582650809083-d09667793574?q=80&w=800" },
        { name: "Kathmandu Durbar Square", img: "https://images.unsplash.com/photo-1524230613591-c12891316496?q=80&w=800" },
    ];

    const festivals = [
        { name: "Bisket Jatra", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800" },
        { name: "Gai Jatra", img: "https://images.unsplash.com/photo-1627814897218-1e43926868af?q=80&w=800" },
        { name: "Indra Jatra", img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800" },
    ];

    return (
        <div className="bg-[#fcf7ef] min-h-screen font-sans relative">

            {/* FLOATING SIDEBAR ICONS (Top Right) */}


            {/* FLOATING RIGHT MIDDLE ICONS (Smiley/Grid) */}


            {/* PAGE HEADER */}
            <div className="bg-[#fff9f0] py-10 text-center border-b">
                <h1 className="text-3xl font-bold text-[#2d4356] font-serif uppercase tracking-wide">
                    Cultural Heritage
                </h1>
                <p className="mt-2 text-gray-500 text-xs">
                    We are here to assist you in cultural services, festivals, and heritage preservation.
                </p>
            </div>

            {/* HERO SECTION */}
            <section className="relative h-[550px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200')` }}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
                    <h2 className="text-5xl font-extrabold uppercase mb-4 leading-tight">
                        Cultural Heritage <br /> of Nepal
                    </h2>
                    <p className="max-w-md text-sm mb-6 opacity-90">
                        Preserving Nepal's temples, festivals, and traditions for generations to come.
                        Nepal's temples, festivals, and traditions for generations to come.
                    </p>
                    <button className="bg-[#e67e22] w-fit px-6 py-3 rounded-sm font-bold flex items-center gap-2 text-sm uppercase">
                        Explore Heritage Sites <ChevronRight size={18} />
                    </button>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-bold text-[#2d4356] mb-6">About Our Heritage</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        Guthi Sansthan has been safeguarding Nepal's rich cultural and religious heritage for decades.
                        From historic temples like Pashupatinath to vibrant festivals such as Indra Jatra, we ensure traditions thrive for generations.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        The country is also characterized by its rich ethnic diversity, vibrant festivals like Dashain and Tihar, unique culinary traditions, and a complex spiritual system rooted in Hindu and Buddhist philosophies.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 h-[400px]">
                    <img src={galleryImages[0]} className="col-span-1 h-full object-cover rounded-sm shadow-sm" alt="Stupa" />
                    <div className="grid grid-rows-2 gap-4 h-full">
                        <img src={galleryImages[1]} className="h-full w-full object-cover rounded-sm shadow-sm" alt="Durbar" />
                        <img src={galleryImages[2]} className="h-full w-full object-cover rounded-sm shadow-sm" alt="Temple" />
                    </div>
                </div>
            </section>

            {/* GALLERY SECTION (With custom navigation and scrollbar) */}
            <section className="max-w-7xl mx-auto px-6 py-10 relative">
                <h3 className="text-xl font-bold text-[#2d4356] mb-4">Gallery</h3>
                <hr className="mb-8 border-gray-300" />

                <div className="relative group">
                    <button className="gallery-prev absolute -left-12 top-1/2 -translate-y-1/2 z-20 border border-blue-900 text-blue-900 p-2 rounded-full hover:bg-blue-900 hover:text-white transition-all">
                        <ChevronLeft size={20} />
                    </button>

                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        navigation={{ nextEl: ".gallery-next", prevEl: ".gallery-prev" }}
                        scrollbar={{ draggable: true, el: ".gallery-scrollbar" }}
                        slidesPerView={5}
                        spaceBetween={15}
                        className="pb-12"
                    >
                        {galleryImages.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img src={img} className="w-full h-40 object-cover rounded-sm border bg-white p-1" alt="gallery" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button className="gallery-next absolute -right-12 top-1/2 -translate-y-1/2 z-20 border border-blue-900 text-blue-900 p-2 rounded-full hover:bg-blue-900 hover:text-white transition-all">
                        <ChevronRight size={20} />
                    </button>
                </div>
                <div className="gallery-scrollbar h-1 bg-gray-200 mt-4 rounded-full max-w-md mx-auto" />
            </section>

            {/* EXPLORE NEPAL SECTION (Cards with text overlay) */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h3 className="text-2xl font-bold text-[#2d4356] mb-8">Explore Nepal's Cultural Heritage</h3>

                <Swiper
                    modules={[Scrollbar]}
                    scrollbar={{ draggable: true, el: ".heritage-scrollbar" }}
                    slidesPerView={3}
                    spaceBetween={25}
                    className="pb-10"
                >
                    {heritageSites.map((site, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative h-80 rounded-sm overflow-hidden group shadow-md">
                                <img src={site.img} className="w-full h-full object-cover transform transition-transform group-hover:scale-110" alt={site.name} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <h4 className="text-white font-bold text-sm tracking-wide">{site.name}</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="heritage-scrollbar h-1.5 bg-gray-200 mt-2 rounded-full" />
            </section>

            {/* FESTIVALS SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-16 relative">
                <h3 className="text-2xl font-bold text-[#2d4356] mb-8">Our Festivals</h3>

                <div className="relative">
                    <button className="fest-prev absolute -left-12 top-1/2 -translate-y-1/2 z-20 border border-blue-900 text-blue-900 p-2 rounded-full hover:bg-blue-900 hover:text-white transition-all">
                        <ChevronLeft size={20} />
                    </button>

                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        navigation={{ nextEl: ".fest-next", prevEl: ".fest-prev" }}
                        scrollbar={{ draggable: true, el: ".fest-scrollbar" }}
                        slidesPerView={3}
                        spaceBetween={25}
                        className="pb-12"
                    >
                        {festivals.map((f, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative h-[500px] rounded-sm overflow-hidden group shadow-lg">
                                    <img src={f.img} className="w-full h-full object-cover" alt={f.name} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6">
                                        <h4 className="text-white font-bold text-lg mb-1">{f.name}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button className="fest-next absolute -right-12 top-1/2 -translate-y-1/2 z-20 border border-blue-900 text-blue-900 p-2 rounded-full hover:bg-blue-900 hover:text-white transition-all">
                        <ChevronRight size={20} />
                    </button>
                </div>
                <div className="fest-scrollbar h-1.5 bg-gray-200 mt-2 rounded-full" />
            </section>

            {/* CSS Overrides for Scrollbar and Custom Elements */}
            <style>{`
        .swiper-scrollbar-drag {
          background-color: #64748b !important;
          height: 100% !important;
        }
        .gallery-scrollbar, .heritage-scrollbar, .fest-scrollbar {
            position: relative !important;
            margin-top: 20px;
        }
      `}</style>
        </div>
    );
};

export default Cultural;