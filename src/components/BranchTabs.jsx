// components/BranchTabs.jsx
import { useState } from "react";
import NoData from "./NoData";
import Employees from "./Employees";

const tabs = ["Articles", "Notices", "Festivals", "Employees"];

const BranchTabs = ({ employees = [] }) => {
  const [active, setActive] = useState("Articles");

  return (
    <>
      <div className="flex gap-4 mt-10">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 border rounded ${
              active === tab ? "bg-orange-500 text-white" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {active === "Employees" ? (
          employees.length ? <Employees data={employees} /> : <NoData />
        ) : (
          <NoData />
        )}
      </div>
    </>
  );
};

export default BranchTabs;
