import { useParams } from "react-router-dom";
import branchesData from "../data/branchesData";
import BranchDetails from "../components/BranchDetails";
import NoData from "../components/NoData";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../context/ThemeContext";
import Employees from "../components/Employees";

const BranchDetail = () => {
  const { isDark } = useTheme();
  const { slug } = useParams();
  const branch = branchesData.find((b) => b.slug === slug);

  if (!branch) {
    return (
      <section className={`py-14 min-h-screen ${isDark ? "bg-[#111827] text-gray-100" : "bg-[#FBF2E8] text-gray-800"}`}>
        <PageHeader title="Branch Not Found" />
        <div className="max-w-6xl mx-auto px-4">
          <NoData />
        </div>
      </section>
    );
  }

  return (
    <>
      <BranchDetails branch={branch} />

    </>
  );
};

export default BranchDetail;
