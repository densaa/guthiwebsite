import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const { isDark } = useTheme();

    // Helper to generate page numbers
    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center items-center gap-2 mt-12">
            {/* Prev Button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-4 py-2 rounded-md border text-sm font-medium transition-all ${isDark
                        ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
                        : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                    }`}
            >
                <ChevronLeft size={16} />
                Prev
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md border text-sm font-bold transition-all ${currentPage === page
                            ? "bg-orange-500 border-orange-500 text-white shadow-md"
                            : isDark
                                ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
                                : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-4 py-2 rounded-md border text-sm font-medium transition-all ${isDark
                        ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
                        : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                    }`}
            >
                Next
                <ChevronRight size={16} />
            </button>
        </div>
    );
};

export default Pagination;
