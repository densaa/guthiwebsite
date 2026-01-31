import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import PageHeader from "../components/PageHeader";

const Contact = () => {
  const { isDark } = useTheme();
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
    <section className={`py-14 min-h-screen ${isDark ? "bg-[#111827] text-gray-100" : "bg-[#FBF2E8] text-gray-800"}`}>

      {/* ===== FULL WIDTH HEADER (SAME AS GALLERY) ===== */}
      <PageHeader
        title="Contact Guthi Sansthan"
        subtitle="We are here to assist you in cultural services, festivals and heritage preservation"
      />

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

          <div className="flex gap-4 mb-8">
            <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full ${isDark ? "bg-orange-500/20 text-orange-400" : "bg-orange-100 text-orange-500"}`}>
              <HelpCircle size={22} />
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-1 ${isDark ? "text-white" : "text-gray-800"}`}>Need Assistance</h3>
              <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                Our support team is available during working hours. Call us directly
                or send a message – we usually respond within few hours.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full ${isDark ? "bg-orange-500/20 text-orange-400" : "bg-orange-100 text-orange-500"}`}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-1 ${isDark ? "text-white" : "text-gray-800"}`}>Trust and Heritage</h3>
              <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                Serving the community since 1964: Guthi Sansthan has been preserving
                and managing Nepal’s cultural, religious and social trusts for decades.
              </p>
            </div>
          </div>
        </div>

        {/* ========== RIGHT SIDE FORM ========== */}
        <div className={`rounded-lg p-10 shadow-xl border transition-all ${isDark ? "bg-[#1f2937] border-gray-700" : "bg-[#fff6ec] border-gray-200"}`}>
          <h2 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}>Get in touch</h2>
          <p className={`text-sm mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <FormField label="Full name" isDark={isDark}>
            <input
              className={useInputClass(isDark)}
              placeholder="Your full name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </FormField>

          <FormField label="Phone no" isDark={isDark}>
            <input
              className={useInputClass(isDark)}
              placeholder="98123*****"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </FormField>

          <FormField label="Subject" isDark={isDark}>
            <select
              className={`w-full mt-1 px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-1 transition-all ${isDark ? "bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500" : "bg-white border-gray-300 text-gray-800 focus:border-orange-400 focus:ring-orange-400"}`}
              name="subject"
              value={form.subject}
              onChange={handleChange}
            >
              <option value="">Select a subject</option>
              <option value="cultural">Cultural Services</option>
              <option value="festivals">Festivals</option>
              <option value="heritage">Heritage Preservation</option>
              <option value="other">Other</option>
            </select>
          </FormField>

          <FormField label="Message" isDark={isDark}>
            <textarea
              rows="4"
              className={useInputClass(isDark)}
              placeholder="Tell us more about your inquiry"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </FormField>

          <button
            onClick={handleSubmit}
            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-md font-bold transition-all transform hover:scale-[1.01] shadow-lg shadow-orange-500/20"
          >
            Send Message
          </button>
        </div>
      </div>

      {/* ================= MAP ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}>Find us here</h2>
        <p className={`text-sm mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Visit our headquarter or reach us through address shown below.
        </p>

        <iframe
          className={`w-full h-[450px] rounded-lg shadow-2xl border ${isDark ? "border-gray-700 opacity-80" : "border-gray-200"}`}
          src="https://www.google.com/maps?q=Guthi%20Sansthan%20Kathmandu&output=embed"
          title="map"
        />
      </div>
    </section>
  );
};

/* ================= REUSABLES ================= */

const InfoCard = ({ icon, title, text }) => {
  const { isDark } = useTheme();
  return (
    <div className={`rounded-lg p-8 text-center shadow-md border transition-all ${isDark ? "bg-[#1f2937] border-gray-700" : "bg-[#fff6ec] border-gray-200"}`}>
      <div className="flex justify-center text-orange-500 mb-4 drop-shadow-sm">
        {icon}
      </div>
      <h4 className={`font-bold text-sm ${isDark ? "text-white" : "text-gray-800"}`}>{title}</h4>
      <p className={`text-sm mt-2 font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>{text}</p>
    </div>
  );
};

const FormField = ({ label, children, isDark }) => (
  <div className="mb-5">
    <label className={`text-sm font-bold block mb-1.5 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      {label} <span className="text-red-500">*</span>
    </label>
    {children}
  </div>
);

const useInputClass = (isDark) =>
  `w-full mt-1 px-4 py-3 border rounded-md text-sm transition-all focus:outline-none focus:ring-1 ${isDark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500" : "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400"}`;

export default Contact;
