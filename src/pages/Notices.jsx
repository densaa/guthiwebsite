import { useState } from "react";
import { Plus, Minus, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import PageHeader from "../components/PageHeader";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 6;

// Extended sample data to demonstrate pagination
const sampleNotices = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  title: [
    "Parking Bid Notice for Kathmandu Durbar Square Area",
    "Annual General Meeting Notice 2081",
    "Important Policy Update Regarding Guthi Lands",
    "Festival Schedule Announcement: Seto Machindranath",
    "Staff Recruitment: Senior Officer Vacancy",
    "Renovation Project: Patan Durbar Square",
  ][i % 6],
  desc: [
    "Details about parking bid requirements, huge opportunity for local vendors.",
    "Notice for upcoming meeting and agenda discussion for all stakeholders.",
    "Important policy updates and guidance regarding land ownership and tenancy.",
    "Schedule for the upcoming chariot festival including routes and timings.",
    "Vacancy announcement for Senior Administrative Officer. Apply within 15 days.",
    "Tender call for the renovation project of historical monuments.",
  ][i % 6],
  pdf: `/notices/notice${(i % 3) + 1}.pdf`,
  date: "2081-04-12",
}));

function NoticeCard({ notice }) {
  const [zoom, setZoom] = useState(1);
  const { isDark } = useTheme();

  return (
    <div className={`rounded-lg shadow-md hover:shadow-xl transition-all border flex flex-col overflow-hidden h-full ${isDark ? "bg-[#1f2937] border-gray-700 text-white" : "bg-white border-gray-200 text-gray-800"}`}>
      {/* PDF Preview Area */}
      <div className={`relative h-[220px] overflow-hidden border-b ${isDark ? "bg-gray-900 border-gray-700" : "bg-gray-100 border-gray-100"}`}>
        <iframe
          src={notice?.pdf}
          title={notice?.title}
          className="w-full h-full pointer-events-none opacity-90"
          style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Top-right popup icon */}
        <a
          href={notice?.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-sm transition-transform hover:scale-110"
          title="Open full PDF"
        >
          <ExternalLink size={16} />
        </a>

        {/* Bottom floating toolbar */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white rounded-full px-4 py-1.5 flex items-center gap-4 text-xs shadow-lg">
          <div className="flex items-center gap-1 border-r border-white/20 pr-3">
            <span className="opacity-70">Page</span>
            <span className="font-bold">1</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setZoom((z) => Math.max(z - 0.15, 0.6))}
              className="hover:text-orange-400 transition-colors"
            >
              <Minus size={14} />
            </button>
            <button onClick={() => setZoom((z) => Math.min(z + 0.15, 2))}
              className="hover:text-orange-400 transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className={`font-bold text-lg mb-2 line-clamp-2 ${isDark ? "text-gray-100" : "text-[#2d4356]"}`}>
          {notice?.title}
        </h3>

        <p className={`text-sm mb-4 line-clamp-3 flex-grow ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {notice?.desc}
        </p>

        <a
          href={notice?.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center py-2.5 rounded-lg text-sm font-bold transition-all ${isDark
            ? "bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-600"
            : "bg-[#f0f6ff] text-[#2d4356] hover:bg-[#e1edff] border border-blue-100"}`}
        >
          View Full Notice
        </a>
      </div>
    </div>
  );
}

export default function Notices() {
  const { isDark } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination Logic
  const indexOfLastItem = currentPage * PAGE_SIZE;
  const indexOfFirstItem = indexOfLastItem - PAGE_SIZE;
  const currentNotices = sampleNotices.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sampleNotices.length / PAGE_SIZE);

  return (
    <section className={`py-14 min-h-screen ${isDark ? "bg-[#111827] text-gray-100" : "bg-[#FBF2E8] text-gray-800"}`}>
      <PageHeader
        title="Important Notices"
        subtitle="Stay informed with the latest announcements, bids, and official updates from Guthi Sansthan."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentNotices.map((n) => (
            <NoticeCard key={n.id} notice={n} />
          ))}
        </div>

        {/* Pagination Section */}
        <div className="mt-16">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}
