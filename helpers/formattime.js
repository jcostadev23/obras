export default function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    let formatTime = `${hours}h`;
    if (remainingMinutes !== 0) return (
        formatTime += `:${remainingMinutes}m`)


    return (formatTime)
}
