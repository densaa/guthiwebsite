import { useState } from "react";

export default function Notices() {
  const notices = [
    {
      title: "Notice Regarding Leasing of Guthi Tainathi Land",
      desc: "Notice Regarding Leasing of Guthi Tainathi Land",
      pdf: "/notices/notice1.pdf",
    },
    {
      title: "Regarding the Protection of Guthi Land",
      desc: "Regarding the Protection of Guthi Land",
      pdf: "/notices/notice2.pdf",
    },
    {
      title: "List of Approved Candidates",
      desc: "List of Approved Candidates",
      pdf: "/notices/notice3.pdf",
    },
  ];

  return (
    <div className="bg-[#f8efe4] min-h-screen">
      {/* Header */}
      <div className="bg-[#f6efe6] py-12 text-center shadow-sm">
        <h1 className="text-3xl font-semibold">Notices</h1>
        <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
          Supporting communities with trusted and time-honored practices where
          tradition meets service for the people.
        </p>
      </div>

      {/* Notices Grid */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {notices.map((n, i) => (
          <NoticeCard key={i} notice={n} />
        ))}
      </div>
    </div>
  );
}

// Individual Notice Card
function NoticeCard({ notice }) {
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(1);

  const handlePageChange = (e) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) setPage(val);
  };

  const zoomIn = () => setZoom((prev) => prev + 0.1);
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.1));
  const fitToWidth = () => setZoom(1);

  return (
    <div className="bg-[#f6efe6] rounded-lg shadow hover:shadow-md transition overflow-hidden">
      {/* PDF Toolbar */}
      <div className="flex items-center justify-between bg-gray-100 px-3 py-2 text-xs">
        <div className="flex items-center gap-2">
          <span>Page</span>
          <input
            type="number"
            min="1"
            value={page}
            onChange={handlePageChange}
            className="w-12 text-center border rounded"
          />
          <span>/ 1</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={zoomOut}
            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
            disabled={zoom <= 0.1}
          >
            -
          </button>
          <button
            onClick={fitToWidth}
            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
          >
            Fit
          </button>
          <button
            onClick={zoomIn}
            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      {/* PDF Preview */}
      <div className="h-64 bg-black overflow-hidden">
        <iframe
          src={notice.pdf}
          className="w-full h-full"
          title={notice.title}
          style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
        />
      </div>

      {/* Text */}
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1">{notice.title}</h3>
        <p className="text-xs text-gray-600 mb-4">{notice.desc}</p>

        {/* View Full Notice */}
        <a
          href={notice.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded hover:bg-blue-200"
        >
          View Full Notice
        </a>
      </div>
    </div>
  );
}
