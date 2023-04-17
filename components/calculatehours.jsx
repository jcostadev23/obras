import formatTime from "/helpers/FormatTime";

export default function CalculateHours({ arrayofdays, startDate, endDate }) {
  let filteredData = arrayofdays
  if (startDate) {
    filteredData = arrayofdays.filter((days) => days.day >= startDate && days.day <= endDate);
  }
  filteredData = filteredData.filter((filteredDay) => filteredDay.workerTimeMinutes >= 0);
  const hours = filteredData.reduce((acc, totalMinutes) => acc + Math.floor(totalMinutes.workerTimeMinutes), 0);

  return (
    <div>
      <h2 className="text-lg my-4 font-semibold mb-2"> Worker Total Hours:</h2>
      <div className="font-bold">{formatTime(hours)}</div>
    </div>)
};

