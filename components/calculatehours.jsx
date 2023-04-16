import FormatTime from "../helpers/formattime";

export default function CalculateHours({ numberofHours, startDate, endDate }) {
  let filteredData = numberofHours
  if (startDate) {
    filteredData = numberofHours.filter((hours) => hours.day >= startDate && hours.day <= endDate);
  }
  filteredData = filteredData.filter((days) => days.workerTimeMinutes >= 0);
  const hours = filteredData.reduce((acc, item) => acc + Math.floor(item.workerTimeMinutes), 0);

  return (
    <div>
      <h2 className="text-lg my-4 font-semibold mb-2"> Worker Total Hours:</h2>
      <div className="font-bold">{FormatTime(hours)}</div>
    </div>)
};

