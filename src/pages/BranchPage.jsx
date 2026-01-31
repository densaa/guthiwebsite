import branchesData from "../data/branchesData";
import { Link } from "react-router-dom";

const BranchPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Branches</h1>

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
  );
};

export default BranchPage;
