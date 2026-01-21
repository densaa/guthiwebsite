import { useState } from "react";
import { Plus, Minus, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const PAGE_SIZE = 6;

export default function Notices() {
  const notices = [
    { id: 1, title: "Notice Regarding Leasing of Guthi Tainathi Land", desc: "Notice Regarding Leasing of Guthi Tainathi Land", pdf: "/notices/notice1.pdf" },
    { id: 2, title: "Regarding the Protection of Guthi Land", desc: "Regarding the Protection of Guthi Land", pdf: "/notices/notice2.pdf" },
    { id: 3, title: "List of Approved Candidates", desc: "List of Approved Candidates", pdf: "/notices/notice3.pdf" },
    { id: 4, title: "Exam Centre", desc: "Exam Centre", pdf: "/notices/notice4.pdf" },
    { id: 5, title: "Parking Bid Notice", desc: "Parking Bid Notice", pdf: "/notices/notice5.pdf" },
    { id: 6, title: "Notice Regarding Service Interruption", desc: "Notice Regarding Service Interruption", pdf: "/notices/notice6.pdf" },
    { id: 7, title: "खुला समावेशी तथा आन्तरिक लिखित परीक्षा तालिका", desc: "Open, Inclusive, and Internal Written Examination Schedule", pdf: "/notices/notice7.pdf" },
    { id: 8, title: "Promotion recommendation based on performance evaluation", desc: "Promotion recommendation based on performance evaluation", pdf: "/notices/notice8.pdf" },
    { id: 9, title: "शाखा कार्यालय वीरगञ्जको ठेक्का वक्यौता बुझाउन आउने सम्बन्धी २५ दिने सूचना", desc: "२५ दिने सूचना", pdf: "/notices/notice9.pdf" },
  ];

  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(notices.length / PAGE_SIZE);

  const paginatedNotices = notices.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#111827] text-gray-100" : "bg-[#fcf0e4] text-gray-800"}`}>
      {/* Header */}
      <div className={`py-12 text-center ${isDark ? "bg-[#1f2937] border-b border-gray-700" : "bg-[#fff6eb] border-b border-gray-200"}`}>
        <h1 className={`text-3xl font-bold ${isDark ? "text-white" : "text-[#2d4356]"}`}>Notices</h1>
        <p className={`mt-2 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Supporting communities with trusted and time-honored practices
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {paginatedNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center items-center gap-1 text-sm">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className={`px-3 py-1 border disabled:opacity-40 rounded-sm ${isDark ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700" : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"}`}
          >
            &lt; Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-8 h-8 border rounded-sm transition-colors ${page === i + 1
                  ? (isDark ? "bg-blue-600 border-blue-500 text-white font-medium" : "bg-gray-300 border-gray-400 text-gray-800 font-medium")
                  : (isDark ? "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700" : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100")
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className={`px-3 py-1 border disabled:opacity-40 rounded-sm ${isDark ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700" : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"}`}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

function NoticeCard({ notice }) {
  const [zoom, setZoom] = useState(1);
  const { isDark } = useTheme();

  return (
    <div className={`rounded-sm shadow-md p-5 flex flex-col transition-all border ${isDark ? "bg-[#1f2937] border-gray-700 text-white" : "bg-[#fff6eb] border-gray-200 text-gray-800"}`}>
      {/* PDF Preview */}
      <div className="relative h-[220px] bg-[#2b2b2b] overflow-hidden rounded">
        <iframe
          src={notice.pdf}
          title={notice.title}
          className="w-full h-full bg-white origin-top"
          style={{ transform: `scale(${zoom})` }}
        />

        {/* Popup / expand icon (KEEP) */}
        <a
          href={notice.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-1.5 rounded"
          title="Open full PDF"
        >
          <ExternalLink size={14} />
        </a>

        {/* Bottom toolbar (zoom only, like image) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/85 text-white text-xs rounded flex items-center gap-3 px-3 py-1.5">
          <div className="flex items-center gap-1 border-r border-white/30 pr-3">
            <span>Page</span>
            <span className="font-medium">1</span>
            <span>/</span>
            <span>1</span>
          </div>

          <button onClick={() => setZoom((z) => Math.max(z - 0.15, 0.6))}>
            <Minus size={12} />
          </button>

          <button onClick={() => setZoom((z) => Math.min(z + 0.15, 2))}>
            <Plus size={12} />
          </button>
        </div>
      </div>

      {/* Info */}
      <h3 className={`mt-4 font-semibold text-sm line-clamp-2 ${isDark ? "text-white" : "text-[#2d4356]"}`}>
        {notice.title}
      </h3>
      <p className={`text-xs mt-1 line-clamp-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
        {notice.desc}
      </p>

      <a
        href={notice.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-4 inline-block w-fit px-4 py-1.5 text-xs font-medium rounded-full transition-all ${isDark ? "bg-blue-900/50 text-blue-300 hover:bg-blue-800/50" : "bg-blue-100 text-blue-700 hover:bg-blue-200"}`}
      >
        View Full Notice
      </a>
    </div>
  );
}
