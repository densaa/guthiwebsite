import { useTheme } from "../context/ThemeContext";

export default function MapSection() {
  const { isDark } = useTheme();

  return (
    <section className={`w-full ${isDark ? "bg-transparent text-white" : "bg-white text-black"} py-16 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: GOOGLE MAP */}
        <div className="w-full h-[360px] rounded-md overflow-hidden border shadow-sm">
          <iframe
            title="Guthi Sansthan Map"
            src="https://www.google.com/maps?q=Guthi+Sansthan+Kathmandu+Nepal&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 leading-snug">
            We bring our work closer to the communities we serve.
          </h2>

          <p className={`${isDark ? "text-gray-300" : "text-gray-600"} leading-relaxed text-base`}>
            With branches spread across the country, Guthi Sansthan ensures that its
            services and cultural responsibilities are accessible to communities nationwide.
            Each branch plays a vital role in preserving traditions, supporting local
            activities, and providing guidance to the public. Explore our branches to
            connect with the one nearest to you.
          </p>
        </div>

      </div>
    </section>
  );
}
