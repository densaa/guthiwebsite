import branchesData from "../data/branchesData";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../context/ThemeContext";

const BranchPage = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-14 min-h-screen ${isDark ? "bg-[#111827] text-gray-100" : "bg-[#FBF2E8] text-gray-800"}`}>
      <PageHeader
        title="Our Branches"
        subtitle="Supporting communities with trusted and time-honored practices where tradition meets service for the people."
      />
      <div className="max-w-6xl mx-auto py-12 px-4">

        <div className="grid md:grid-cols-3 gap-6">
          {branchesData.map((branch) => (
            <Link
              key={branch.slug}
              to={`/branches/${branch.slug}`}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={branch.image}
                alt={branch.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 font-semibold text-center">
                {branch.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchPage;
