import BranchInfo from "./BranchInfo";
import BranchTabs from "./BranchTabs";

const BranchDetails = ({ branch }) => {
  return (
    // 1. The main wrapper provides the beige background for the top area
    <div className="bg-[#f7efe6]">
      
      {/* 2. Header Section (Text only, no shadow) */}
      <header className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e44] tracking-tight">
          Our Branches
        </h1>
        <p className="text-[#8a94a6] text-lg max-w-2xl mx-auto mt-6 px-6 leading-relaxed">
          Supporting communities with trusted and time-honored practices where 
          tradition meets service for the people.
        </p>
      </header>

      {/* 
          3. White Content Container 
          - rounded-t-[40px]: Creates those large rounded top corners seen in the image
          - bg-white: The main content area color
          - shadow-xl: Provides the soft depth
          - min-h-screen: Ensures it fills the rest of the page
      */}
      <div className="bg-white rounded-t-[50px] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] min-h-screen">
        <main className="w-full py-12 px-6 md:px-12 lg:px-24 space-y-16">
          <BranchInfo branch={branch} />
          <BranchTabs employees={branch.employees} />
        </main>
      </div>
    </div>
  );
};

export default BranchDetails;