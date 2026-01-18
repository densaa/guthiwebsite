import { useState } from "react";
import { CalendarDays } from "lucide-react";

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
    <div className="min-h-screen bg-[#f8efe4]">

      {/* ================= Page Header ================= */}
      <header className="bg-[#f6efe6] py-10 text-center shadow-sm">
        <h1 className="text-2xl font-semibold">Calendar</h1>
        <p className="mt-2 mx-auto max-w-2xl text-sm text-gray-600">
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
      <main className="mx-auto mt-10 max-w-5xl rounded-lg bg-[#eae3dc] p-6 shadow">

        {/* Month Navigation */}
        <div className="mb-4 flex items-center justify-between rounded bg-blue-200 px-6 py-3">
          <h2 className="text-lg font-semibold">
            {NEPALI_MONTHS[currentMonth]}, {year}
          </h2>

          <div className="flex gap-2">
            <button
              onClick={goToPreviousMonth}
              className="rounded bg-white px-3 py-1 shadow hover:bg-gray-100"
            >
              ←
            </button>
            <button
              onClick={goToNextMonth}
              className="rounded bg-white px-3 py-1 shadow hover:bg-gray-100"
            >
              →
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 border border-gray-400 bg-white">
          {WEEK_DAYS.map((day) => (
            <div
              key={day}
              className="border border-gray-300 p-2 text-center text-sm font-medium"
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
                className={`h-24 border border-gray-300 p-2 text-sm ${
                  dateNumber === new Date().getDate() && currentMonth === 8
                    ? "bg-blue-100"
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
