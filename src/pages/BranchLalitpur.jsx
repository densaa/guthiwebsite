import branchesData from "../data/branchesData";
import BranchDetails from "../components/BranchDetails";

const BranchLalitpur = () => {
  const branch = branchesData.find(b => b.slug === "lalitpur");

  return (
    <div className="max-w-6xl mx-auto px-4">
      <BranchDetails branch={branch} />

      <h3 className="text-xl font-bold mt-10 mb-4">Employees</h3>
      <ul className="space-y-2">
        {branch.employees.map((emp, i) => (
          <li key={i} className="border p-3 rounded">
            <strong>{emp.name}</strong> – {emp.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BranchLalitpur;
