import { useState } from "react";
import { Plus, Minus, ExternalLink } from "lucide-react";

export default function NoticeCard({ notice }) {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="bg-[#fff6eb] rounded-lg shadow-sm p-4">
      {/* PDF Preview Container */}
      <div className="relative bg-[#2b2b2b] rounded-lg overflow-hidden h-[230px]">
        {/* PDF iframe */}
        <iframe
          src={notice.pdf}
          title={notice.title}
          className="w-full h-full origin-top bg-white"
          style={{ transform: `scale(${zoom})` }}
        />

        {/* Top-right popup icon (KEEP THIS) */}
        <a
          href={notice.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-1.5 rounded"
          title="Open full PDF"
        >
          <ExternalLink size={14} />
        </a>

        {/* Bottom floating toolbar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/85 text-white rounded-md px-3 py-1.5 flex items-center gap-3 text-[11px]">
          {/* Page info (static preview like image) */}
          <div className="flex items-center gap-1 border-r border-white/30 pr-3">
            <span>Page</span>
            <span className="font-medium">1</span>
            <span>/</span>
            <span>1</span>
          </div>

          {/* Zoom controls */}
          <button
            onClick={() => setZoom((z) => Math.max(z - 0.15, 0.6))}
            className="hover:text-blue-400"
          >
            <Minus size={12} />
          </button>

          <button
            onClick={() => setZoom((z) => Math.min(z + 0.15, 2))}
            className="hover:text-blue-400"
          >
            <Plus size={12} />
          </button>
        </div>
      </div>

      {/* Text content */}
      <h3 className="mt-4 font-semibold text-sm text-[#2d4356] line-clamp-2">
        {notice.title}
      </h3>

      <p className="mt-1 text-xs text-gray-600 line-clamp-2">
        {notice.desc}
      </p>

      {/* View full notice button */}
      <a
        href={notice.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 px-3 py-1.5 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
      >
        View Full Notice
      </a>
    </div>
  );
}
