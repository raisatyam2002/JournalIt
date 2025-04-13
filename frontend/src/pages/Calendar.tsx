import { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get the current month and year
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const renderCalendarHeader = () => {
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();
    return (
      <div className="flex justify-between items-center p-3">
        <button onClick={goToPreviousMonth} className="text-lg">
          &#60;
        </button>
        <span className="text-4xl">
          {month} {year}
        </span>
        <button
          onClick={goToNextMonth}
          className={`text-lg ${
            currentMonth === currentDate.getMonth() &&
            currentYear === currentDate.getFullYear()
              ? "text-gray-400 cursor-not-allowed"
              : ""
          }`}
          disabled={
            currentMonth === currentDate.getMonth() &&
            currentYear === currentDate.getFullYear()
          }
        >
          &#62;
        </button>
      </div>
    );
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return (
      <div className="grid grid-cols-7 text-center p-1 ">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="font-bold p-1 text-lg">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderDays = () => {
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    // Adjust so the calendar starts with Monday (0 = Sunday, 1 = Monday, etc.)
    const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const totalDays = [
      ...Array(startDay).fill(null),
      ...Array(daysInMonth)
        .fill(null)
        .map((_, index) => index + 1),
    ];

    return (
      <div className="grid grid-cols-7 text-center p-4 bg-white">
        {totalDays.map((day, index) => {
          const isLastInRow = (index + 1) % 7 === 0; // Check if it's the last cell in a row
          return (
            <div
              key={index}
              className={`p-3 border-b ${
                isLastInRow ? "" : "border-r"
              } h-20 flex justify-center items-center `}
            >
              {day && <span>{day}</span>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="p-4 mt-8">
      {renderCalendarHeader()} {/* Display month/year and navigation buttons */}
      {renderDaysOfWeek()} {/* Days of the week header */}
      <div className="border border-gray-300 rounded-lg bg-white p-4">
        {renderDays()} {/* Calendar days grid */}
      </div>
    </div>
  );
};

export default Calendar;
