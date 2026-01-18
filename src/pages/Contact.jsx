import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({ name: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="bg-[#fff3e6] py-14 min-h-screen">

      {/* ===== FULL WIDTH HEADER (SAME AS GALLERY) ===== */}
      <div className="bg-[#fff7ee] py-10 text-center shadow-sm w-full transform -translate-y-[10%]">
        <h1 className="text-3xl font-semibold mb-2">Contact Guthi Sansthan</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are here to assist you in cultural services, festivals and heritage preservation
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ========== LEFT SIDE ========== */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <InfoCard icon={<Phone />} title="Phone no" text="9851125812" />
            <InfoCard icon={<Mail />} title="Email Address" text="info@guthisansthan.org.np" />
            <InfoCard icon={<MapPin />} title="Headquarter" text="Guthi Sansthan, Kathmandu, Nepal" />
            <InfoCard icon={<Clock />} title="Office hours" text="Guthi Sansthan, Kathmandu,Nepal" />
          </div>

          <div className="flex gap-3 mb-6">
            <HelpCircle className="text-orange-500 mt-1" size={20} />
            <div>
              <h3 className="font-semibold">Need Assistance</h3>
              <p className="text-sm text-gray-600">
                Our support team is available during working hours. Call us directly
                or send a message – we usually respond within few hours.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <ShieldCheck className="text-orange-500 mt-1" size={20} />
            <div>
              <h3 className="font-semibold">Trust and Heritage</h3>
              <p className="text-sm text-gray-600">
                Serving the community since 1964: Guthi Sansthan has been preserving
                and managing Nepal’s cultural, religious and social trusts for decades.
              </p>
            </div>
          </div>
        </div>

        {/* ========== RIGHT SIDE FORM ========== */}
        <div className="bg-[#fff6ec] rounded-lg p-8 shadow-sm">
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <p className="text-sm text-gray-600 mb-6">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <FormField label="Full name">
            <input
              className={inputClass}
              placeholder="Your full name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </FormField>

          <FormField label="Phone no">
            <input
              className={inputClass}
              placeholder="98123*****"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </FormField>

          <FormField label="Subject">
            <select
              className="w-full mt-1 px-4 py-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            >
              <option value="">Select a subject</option>
              c
            </select>
          </FormField>

          <FormField label="Message">
            <textarea
              rows="4"
              className={inputClass}
              placeholder="Tell us more about your inquiry"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </FormField>

          <button
            onClick={handleSubmit}
            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium"
          >
            Send Message
          </button>
        </div>
      </div>

      {/* ================= MAP ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold">Find Us Here</h2>
        <p className="text-sm text-gray-600 mb-4">
          Visit our headquarter or reach us through address shown below.
        </p>

        <iframe
          className="w-full h-[350px] rounded-md"
          src="https://www.google.com/maps?q=Guthi%20Sansthan%20Kathmandu&output=embed"
          title="map"
        />
      </div>
    </section>
  );
};

/* ================= REUSABLES ================= */

const InfoCard = ({ icon, title, text }) => (
  <div className="bg-[#fff6ec] rounded-lg p-6 text-center shadow-sm">
    <div className="flex justify-center text-orange-500 mb-3">
      {icon}
    </div>
    <h4 className="font-semibold text-sm">{title}</h4>
    <p className="text-sm text-gray-600 mt-1">{text}</p>
  </div>
);

const FormField = ({ label, children }) => (
  <div className="mb-4">
    <label className="text-sm font-medium">
      {label} <span className="text-red-500">*</span>
    </label>
    {children}
  </div>
);

const inputClass =
  "w-full mt-1 px-4 py-3 bg-white border border-gray-300 rounded-md text-sm " +
  "placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400";

export default Contact;
