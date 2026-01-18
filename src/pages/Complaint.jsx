import React, { useState } from "react";
import { CalendarDays, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Complaint = () => {
  const navigate = useNavigate(); // ✅ for navigation

  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    address: "",
    branch: "",
    category: "",
    title: "",
    details: "",
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (selectedFile.size > 1024 * 1024) {
      alert("File size must be less than 1MB");
      return;
    }

    setFile(selectedFile);
    if (selectedFile.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", { ...formData, file });
    alert("Complaint submitted successfully!");

    setFormData({
      fullName: "",
      contact: "",
      address: "",
      branch: "",
      category: "",
      title: "",
      details: "",
    });
    setFile(null);
    setPreview(null);
  };

  const inputClass =
    "w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600";

  const labelClass = "text-sm font-medium text-gray-700";
  const star = <span className="text-red-500">*</span>;

  return (
    <div className=" bg-[#f6efe8] py-12 px-4 relative">
      {/* ================= HEADER ================= */}
      <div className="mb-10 text-center relative">
        <h1 className="text-3xl font-bold text-gray-800">Complain Form</h1>
        <p className="mt-2 text-gray-600">
          We are here to assist you in cultural services, festivals and heritage
          preservation
        </p>

        {/* ================= RIGHT SIDE ICONS (VERTICAL) ================= */}
        <div className="absolute right-0 top-0 flex flex-col gap-3">
          {/* Calendar icon */}
          <button
            onClick={() => navigate("/calendar")} // ✅ now clickable
            className="p-2 rounded bg-orange-100 text-orange-600 hover:bg-orange-200 shadow"
            aria-label="Go to calendar"
          >
            <CalendarDays size={18} />
          </button>

          {/* Complaint icon */}
          <button
            className="p-2 rounded bg-orange-100 text-orange-600 hover:bg-orange-200 shadow"
            aria-label="Complaint"
          >
            <MessageSquare size={18} />
          </button>
        </div>
      </div>

      {/* ================= FORM CARD ================= */}
      <div className="mx-auto max-w-5xl rounded-lg bg-white shadow-md">
        <div className="rounded-t-lg bg-blue-900 px-6 py-3 text-white font-semibold">
          Submit a complaint
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>
                Full Name {star}
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Contact no {star}
              </label>
              <input
                type="tel"
                name="contact"
                placeholder="Your phone number"
                value={formData.contact}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>
                Address {star}
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your address"
                value={formData.address}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Branch {star}
              </label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Select Branch</option>
                <option>Kathmandu</option>
                <option>Lalitpur</option>
                <option>Bhaktapur</option>
              </select>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className={labelClass}>
              Category of complaint {star}
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select Category</option>
              <option>Land Issue</option>
              <option>Festival Issue</option>
              <option>Heritage Issue</option>
            </select>
          </div>

          {/* ================= TITLE (HEIGHT INCREASED) ================= */}
          <div>
            <label className={labelClass}>
              Title of Complaint {star}
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter your complaint title"
              value={formData.title}
              onChange={handleChange}
              required
              className={`${inputClass} py-4`} // ✅ increased height
            />
          </div>

          {/* Upload */}
          <div className="flex gap-6 items-start">
            <div className="h-28 w-28 border rounded-md flex items-center justify-center bg-gray-100 overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-sm text-gray-400">Preview</span>
              )}
            </div>

            <div>
              <label className="inline-block cursor-pointer rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200">
                Choose file
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              <ul className="mt-3 text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Upload supporting documents or photos (max 1MB)</li>
                <li>Attach clear evidence related to your complaint</li>
                <li>Please provide relevant files (JPG, PNG, PDF)</li>
              </ul>
            </div>
          </div>

          {/* Details */}
          <div>
            <label className={labelClass}>
              Complaint details {star}
            </label>
            <textarea
              name="details"
              rows="7"
              placeholder="Enter your complaint here"
              value={formData.details}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="rounded bg-orange-500 px-8 py-2 font-semibold text-white hover:bg-orange-600 transition"
            >
              Submit now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Complaint;
