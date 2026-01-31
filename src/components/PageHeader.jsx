import React from "react";
import { useTheme } from "../context/ThemeContext";

const PageHeader = ({ title, subtitle }) => {
    const { isDark } = useTheme();

    return (
        <div
            className={`py-12 text-center border-b transform -translate-y-[10%] w-full transition-colors ${isDark
                ? "bg-[#1f2937] border-gray-700 shadow-md"
                : "bg-[#FBF2E8] border-gray-100 shadow-sm" // Slightly whiter than #fff7ee
                }`}
        >
            <h1
                className={`text-4xl font-bold mb-2 ${isDark ? "text-white" : "text-[#2d4356]"
                    }`}
            >
                {title}
            </h1>
            <p
                className={`max-w-2xl mx-auto text-sm ${isDark ? "text-gray-400" : "text-gray-600"
                    }`}
            >
                {subtitle}
            </p>
        </div>
    );
};

export default PageHeader;
