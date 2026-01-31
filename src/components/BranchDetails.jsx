// components/BranchDetails.jsx
import BranchInfo from "./BranchInfo";
import BranchTabs from "./BranchTabs";

const BranchDetails = ({ branch }) => {
  return (
    <section className="container mx-auto py-12 space-y-12">
      {/* Top info section (image + contact + hours) */}
      <BranchInfo branch={branch} />

      {/* Tabs: Articles | Notices | Festivals | Employees */}
      <BranchTabs branch={branch} />
    </section>
  );
};

export default BranchDetails;
