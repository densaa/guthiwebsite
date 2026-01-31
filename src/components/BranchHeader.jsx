// components/BranchHeader.jsx
const BranchHeader = ({ title = "Our Branches", subtitle = "Supporting communities with trusted and time-honored practices where tradition meets service for the people." }) => {
  return (
    <div className="bg-[#f7efe6] py-12 text-center shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle ? (
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
};

export default BranchHeader;
