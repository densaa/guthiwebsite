const Employees = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {data.map((emp, index) => (
        <div key={index} className="overflow-hidden rounded-2xl shadow-lg group">
          {/* Top Half (Light Blue) */}
          <div className="bg-[#d1e1f0] h-32 flex justify-center items-end">
             {/* Profile Circle */}
             <div className="w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden translate-y-12 shadow-md">
                <img 
                  src={emp.image || "/path-to-default-avatar.png"} 
                  alt={emp.name} 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
          
          {/* Bottom Half (White) */}
          <div className="bg-white pt-16 pb-6 px-4 text-center">
            <h4 className="font-bold text-gray-800 text-lg">{emp.name}</h4>
            <p className="text-[#ee7a46] text-sm font-medium mt-1 uppercase tracking-wide">
              {emp.designation}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employees;