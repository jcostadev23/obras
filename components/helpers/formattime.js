export default function FormatTime(minutes) {
    const h = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    let formatTime = `${h}h`;
    if (remainingMinutes !== 0) return (
        formatTime += `:${remainingMinutes}m`)

    return (formatTime)
}