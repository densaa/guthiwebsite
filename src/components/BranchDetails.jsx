import BranchInfo from "./BranchInfo";
import BranchTabs from "./BranchTabs";
import PageHeader from "./PageHeader";
import { useTheme } from "../context/ThemeContext";

const BranchDetails = ({ branch }) => {
  const { isDark } = useTheme();

  return (
    // Only apply the background wrapper. The layout logic mimics Contact page but keeps the overlapping card effect if possible or simplifies it.
    // The previous layout had a full page wrapper. Let's start with a section.
    <div className={isDark ? "bg-[#111827]" : "bg-[#FBF2E8]"}>

      {/* Header Section using accessible generic component */}
      {/* We add a wrapper to provide the spacing PageHeader expects if it has negative translate, or we just trust it.
          Contact page has py-14 on section. Let's add top padding to this div.
      */}
      <div className="pt-14">
        <PageHeader
          title="Our Branches"
          subtitle="Supporting communities with trusted and time-honored practices where tradition meets service for the people."
        />
      </div>

      {/* 
          3. Content Container 
          Adapted for Dark Mode
      */}
      <div className={`rounded-t-[50px]  min-h-screen ${isDark ? "bg-gray-900 border-t border-gray-800" : "bg-[#fff7ee]"}`}>
        <main className="w-full py-12 px-6 md:px-12 lg:px-24 space-y-16">
          <BranchInfo branch={branch} />
          <BranchTabs employees={branch.employees} />
        </main>
      </div>
    </div>
  );
};

export default BranchDetails;