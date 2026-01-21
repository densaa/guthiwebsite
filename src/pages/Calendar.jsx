import { CalendarDays } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Nepali months
const NEPALI_MONTHS = [
  "Baisakh",
  "Jestha",
  "Ashadh",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra",
];

// Function to get the number of days in a Nepali month
// Nepali year 2082 (2025-2026 AD)
const getDaysInMonth = (monthIndex) => {
  const daysInMonths = [31, 31, 31, 32, 31, 30, 29, 29, 30, 29, 30, 30];
  return daysInMonths[monthIndex];
};

// Function to get the starting day of the week for a Nepali month
const getStartingDay = (monthIndex) => {
  // Starting days for each month (0=Sunday, 1=Monday, etc.)
  const startingDays = [6, 0, 3, 5, 1, 3, 5, 0, 2, 4, 6, 1];
  return startingDays[monthIndex];
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(8); // Start with Poush (index 8)
  const { isDark } = useTheme();
  const year = 2082;

  const goToPreviousMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const startingDay = getStartingDay(currentMonth);

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#111827] text-gray-100" : "bg-[#f8efe4] text-gray-800"}`}>

      {/* ================= Page Header ================= */}
      <header className={`py-12 text-center border-b transition-colors ${isDark ? "bg-[#1f2937] border-gray-700" : "bg-[#f6efe6] border-gray-200"}`}>
        <h1 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>Calendar</h1>
        <p className={`mt-2 mx-auto max-w-2xl text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Supporting communities with trusted and time-honored practices where
          tradition meets service for the people.
        </p>
      </header>

      {/* ================= FIXED CALENDAR ICON (TOP RIGHT) ================= */}
      <aside className="absolute right-6 top-45 z-20">

        <button
          aria-label="Calendar shortcut"
          className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-white shadow transition hover:bg-orange-600"
        >
          <CalendarDays size={18} />
        </button>
      </aside>

      {/* ================= Calendar Section ================= */}
      <main className={`mx-auto mt-10 max-w-5xl rounded-lg p-8 shadow-lg border transition-all ${isDark ? "bg-[#1f2937] border-gray-700" : "bg-[#eae3dc] border-gray-200"}`}>

        {/* Month Navigation */}
        <div className={`mb-6 flex items-center justify-between rounded px-6 py-4 transition-colors ${isDark ? "bg-blue-900/40 text-blue-100" : "bg-blue-200 text-blue-900"}`}>
          <h2 className="text-xl font-bold">
            {NEPALI_MONTHS[currentMonth]}, {year}
          </h2>

          <div className="flex gap-3">
            <button
              onClick={goToPreviousMonth}
              className={`flex h-10 w-10 items-center justify-center rounded-full shadow transition-all ${isDark ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-100"}`}
            >
              ←
            </button>
            <button
              onClick={goToNextMonth}
              className={`flex h-10 w-10 items-center justify-center rounded-full shadow transition-all ${isDark ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-100"}`}
            >
              →
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className={`grid grid-cols-7 border border-collapse transition-colors ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-400"}`}>
          {WEEK_DAYS.map((day) => (
            <div
              key={day}
              className={`border p-3 text-center text-sm font-bold uppercase tracking-wider ${isDark ? "border-gray-700 text-gray-400 bg-gray-800" : "border-gray-300 text-gray-600 bg-gray-50"}`}
            >
              {day}
            </div>
          ))}

          {[...Array(35)].map((_, index) => {
            const dateNumber =
              index >= startingDay && index < startingDay + daysInMonth
                ? index - startingDay + 1
                : "";

            return (
              <div
                key={index}
                className={`h-24 border p-3 text-sm transition-all ${isDark ? "border-gray-700 hover:bg-gray-800/50" : "border-gray-300 hover:bg-gray-50"
                  } ${dateNumber === new Date().getDate() && currentMonth === 8
                    ? (isDark ? "bg-blue-900/30 text-blue-200" : "bg-blue-100 font-bold text-blue-800")
                    : ""
                  }`}
              >
                {dateNumber}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Calendar;
