import { Phone, MapPin, Clock } from "lucide-react";

const BranchInfo = ({ branch }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Image */}
      <img
        src={branch.image}
        alt={branch.name}
        className="w-full h-[320px] object-cover rounded-xl"
      />

      {/* Info */}
      <div className="space-y-4 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold">{branch.name}</h2>

        <div className="flex items-center gap-3">
          <Phone size={18} />
          <span>{branch.phone || "N/A"}</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={18} />
          <span>{branch.address || "N/A"}</span>
        </div>

        <div className="flex items-center gap-3">
          <Clock size={18} />
          <span>{branch.hours || "N/A"}</span>
        </div>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default BranchInfo;

