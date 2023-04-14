import FormatTime from "../helpers/formattime";

export default function CalculateHours({ personHours, startDate, endDate }) {

  if (!startDate || !endDate) {
    return
  }
  const filteredData = personHours.filter((hours) => hours.day >= startDate && hours.day <= endDate);
  let hours = filteredData.reduce((acc, item) => acc + Math.floor(item.workerTimeMinutes), 0);
  // let minutes = filteredData.reduce((acc, item) => acc + item.workerTimeMinutes % 60, 0);
  // hours += Math.floor(minutes / 60);
  // minutes = minutes % 60;
  // let totalTime = `${hours}h`;
  // if (minutes !== 0) return (<div>
  // <h2 className="text-lg font-semibold mb-2">Total Hours:</h2>
  // <strong className="font-bold"> {totalTime += `: ${minutes}m`}</strong>
  // </div>
  // )

  return (
    <div>
      <h2 className="text-lg my-4 font-semibold mb-2">Total Hours:</h2>
      {/* <strong className="font-bold">{totalTime}</strong> */}
      <div className="font-bold">{FormatTime(hours)}</div>
    </div>)
};


