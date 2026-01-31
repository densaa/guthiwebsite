const Employees = ({ data }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {data.map((emp, i) => (
        <div key={i} className="border rounded p-4">
          <h3 className="font-bold">{emp.name}</h3>
          <p>{emp.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Employees;
