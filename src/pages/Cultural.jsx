import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Cultural = () => {
    const { isDark } = useTheme();

    const galleryRef = useRef(null);
    const festRef = useRef(null);

    /* PAGINATION STATE FOR EXPLORE NEPAL */
    const [page, setPage] = useState(1);
    const PAGE_SIZE = 6;

    const galleryImages = [
        "https://guthisansthan.org.np/assets/swayambhunath-CYxD-YC2.jpg",
        "https://images.unsplash.com/photo-1582650809083-d09667793574?q=80&w=600",
        "https://images.unsplash.com/photo-1524230613591-c12891316496?q=80&w=600",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600",
        "https://images.unsplash.com/photo-1627814897218-1e43926868af?q=80&w=600",
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=600"
    ];

    const heritageSites = [
        { id: 1, name: "Bhaktapur Durbar Square", img: galleryImages[0], desc: "An ancient royal palace complex in Bhaktapur city." },
        { id: 2, name: "Patan Durbar Square", img: galleryImages[1], desc: "Historic royal palace of Patan with exquisite Newari architecture." },
        { id: 3, name: "Kathmandu Durbar Square", img: galleryImages[2], desc: "The Hanuman Dhoka Palace Square in the heart of the capital." },
        { id: 4, name: "Swayambhunath", img: galleryImages[3], desc: "The ancient Monkey Temple offering panoramic views of Kathmandu." },
        { id: 5, name: "Pashupatinath", img: galleryImages[4], desc: "The holiest Hindu shrine in Nepal dedicated to Lord Shiva." },
        { id: 6, name: "Boudhanath", img: galleryImages[5], desc: "One of the largest spherical stupas in the world and a Buddhist hub." },
        { id: 7, name: "Changu Narayan", img: galleryImages[0], desc: "An ancient Hindu temple dedicated to Lord Vishnu, a UNESCO site." },
        { id: 8, name: "Janaki Mandir", img: galleryImages[1], desc: "Magnificent temple dedicated to Goddess Sita in Janakpur." },
        { id: 9, name: "Muktinath", img: galleryImages[2], desc: "Sacred site for both Hindus and Buddhists in the Annapurna region." },
        { id: 10, name: "Lumbini", img: galleryImages[3], desc: "The birthplace of Lord Buddha, the Light of Asia." },
        { id: 11, name: "Manakamana", img: galleryImages[4], desc: "Sacred temple of Goddess Bhagwati reachable by cable car." },
        { id: 12, name: "Gorkha Durbar", img: galleryImages[5], desc: "Historic palace and fort of the Shah dynasty in Gorkha." }
    ];

    const festivals = [
        { name: "Bisket Jatra", img: galleryImages[3] },
        { name: "Gai Jatra", img: galleryImages[4] },
        { name: "Indra Jatra", img: galleryImages[5] }
    ];

    const scroll = (ref, amount) => {
        ref.current?.scrollBy({ left: amount, behavior: "smooth" });
    };

    const totalPages = Math.ceil(heritageSites.length / PAGE_SIZE);
    const visibleHeritage = heritageSites.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE
    );

    return (
        <div className={`min-h-screen overflow-x-hidden ${isDark ? "bg-[#111827] text-white" : "bg-[#fcf7ef] text-gray-800"}`}>

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[600px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: `url(${galleryImages[0]})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                            Nepal's Spiritual Legacy
                        </span>
                        <h2 className="text-5xl md:text-7xl font-extrabold uppercase mb-6 leading-tight text-white">
                            Cultural <br /> <span className="text-orange-400">Heritage</span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-lg mb-8 text-gray-200 leading-relaxed shadow-sm">
                            Guthi Sansthan serves as the guardian of Nepal's divine traditions,
                            preserving the sacred bonds between our land, our people, and our gods.
                        </p>
                        <button className="px-8 py-3 bg-white text-gray-900 font-bold rounded-sm hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                            Explore Traditions
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= GALLERY ================= */}
            <section className="max-w-7xl mx-auto px-6 py-14 overflow-hidden">
                <h3 className="text-xl font-bold mb-6">Gallery</h3>

                <div className="relative">
                    <ArrowLeft onClick={() => scroll(galleryRef, -300)} />

                    <div
                        ref={galleryRef}
                        className="flex gap-4 px-14 overflow-x-auto scroll-smooth no-scrollbar"
                    >
                        {galleryImages.map((img, i) => (
                            <div key={i} className="min-w-[220px] h-40 border rounded-sm p-1 bg-white">
                                <img src={img} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    <ArrowRight onClick={() => scroll(galleryRef, 300)} />
                </div>
            </section>

            {/* ================= EXPLORE NEPAL (PAGINATION) ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h3 className="text-2xl font-bold mb-10">
                    Explore Nepal’s Cultural Heritage
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                    {visibleHeritage.map((site, i) => (
                        <div
                            key={i}
                            className="h-80 relative rounded-sm overflow-hidden shadow-md"
                        >
                            <img src={site.img} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <h4 className="absolute bottom-4 left-4 text-white font-bold text-sm">
                                {site.name}
                            </h4>
                        </div>
                    ))}
                </div>

                {/* PAGINATION DOTS */}
                <div className="flex justify-center gap-2 mt-10">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className={`w-3 h-3 rounded-full transition-all ${page === i
                                ? "bg-orange-500 scale-110"
                                : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* ================= FESTIVALS ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
                <h3 className="text-2xl font-bold mb-8">Our Festivals</h3>

                <div className="relative">
                    <ArrowLeft onClick={() => scroll(festRef, -400)} />

                    <div
                        ref={festRef}
                        className="flex gap-6 px-14 overflow-x-auto scroll-smooth no-scrollbar"
                    >
                        {festivals.map((f, i) => (
                            <div
                                key={i}
                                className="min-w-[360px] h-[500px] relative rounded-sm overflow-hidden shadow-lg"
                            >
                                <img src={f.img} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                                <h4 className="absolute bottom-6 left-6 text-white font-bold text-lg">
                                    {f.name}
                                </h4>
                            </div>
                        ))}
                    </div>

                    <ArrowRight onClick={() => scroll(festRef, 400)} />
                </div>
            </section>

            {/* SCROLLBAR HIDE */}
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
            `}</style>
        </div>
    );
};

/* ====== CLEAR, ALWAYS-VISIBLE BUTTONS ====== */
const ArrowLeft = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20
        w-11 h-11 rounded-full bg-white shadow-lg
        flex items-center justify-center hover:scale-105 transition"
    >
        <ChevronLeft size={22} className="text-gray-800" />
    </button>
);

const ArrowRight = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20
        w-11 h-11 rounded-full bg-white shadow-lg
        flex items-center justify-center hover:scale-105 transition"
    >
        <ChevronRight size={22} className="text-gray-800" />
    </button>
);

function CulturalCard({ item, isDark }) {
    return (
        <div
            className={`rounded-sm shadow-md overflow-hidden transition-all border group ${isDark
                ? "bg-[#1f2937] border-gray-700 text-white hover:border-blue-500"
                : "bg-[#fff6eb] border-gray-200 text-gray-800 hover:border-orange-300"
                }`}
        >
            {/* Image */}
            <div className="h-[240px] overflow-hidden relative">
                <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col">
                <h3
                    className={`font-bold text-lg mb-2 line-clamp-1 transition-colors ${isDark ? "text-white" : "text-[#2d4356]"
                        }`}
                >
                    {item.name}
                </h3>
                <p
                    className={`text-sm mb-6 line-clamp-2 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                >
                    {item.desc}
                </p>

                <button
                    className={`w-fit px-6 py-2 text-xs font-bold rounded-full transition-all border-2 ${isDark
                        ? "border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
                        : "border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
                        }`}
                >
                    View Details
                </button>
            </div>
        </div>
    );
}

export default Cultural;
