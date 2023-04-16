import FormatTime from "../helpers/formattime";

export default function CalculateHours({ numberofHours, startDate, endDate }) {

  if (!startDate || !endDate) {
    let h = numberofHours.reduce((acc, item) => acc + Math.floor(item.workerTimeMinutes), 0);
    return (<div className="font-bold">{FormatTime(h)}</div>)
  }

  const filteredData = numberofHours.filter((hours) => hours.day >= startDate && hours.day <= endDate);
  let hours = filteredData.reduce((acc, item) => acc + Math.floor(item.workerTimeMinutes), 0);

  return (
    <div>
      <h2 className="text-lg my-4 font-semibold mb-2">Total Hours:</h2>
      <div className="font-bold">{FormatTime(hours)}</div>
    </div>)
};


