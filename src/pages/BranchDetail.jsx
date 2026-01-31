import { useParams } from "react-router-dom";
import branchesData from "../data/branchesData";
import BranchDetails from "../components/BranchDetails";
import NoData from "../components/NoData";
import BranchHeader from "../components/BranchHeader";
import Employees from "../components/Employees";

const BranchDetail = () => {
  const { slug } = useParams();
  const branch = branchesData.find((b) => b.slug === slug);

  if (!branch) {
    return (
         <>
        <BranchHeader title="Branch Not Found" />
        <div className="max-w-6xl mx-auto px-4">
          <NoData />
        </div>
      </>
    );
  }

  return (
    <>
      <BranchDetails branch={branch} />

    </>
  );
};

export default BranchDetail;
