import FormatTime from "../helpers/formattime";

export default function CalculateHours({ arrayofdays, startDate, endDate }) {
  let filteredData = arrayofdays
  if (startDate) {
    filteredData = arrayofdays.filter((items) => items.day >= startDate && items.day <= endDate);
  }
  filteredData = filteredData.filter((items) => items.workerTimeMinutes >= 0);
  const hours = filteredData.reduce((acc, items) => acc + Math.floor(items.workerTimeMinutes), 0);

  return (
    <div>
      <h2 className="text-lg my-4 font-semibold mb-2"> Worker Total Hours:</h2>
      <div className="font-bold">{FormatTime(hours)}</div>
    </div>)
};

