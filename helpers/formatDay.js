
async function formatDay(day) {

    return {
        day: day.day,
        id: day.id,
        people: await day.people,
        workerTimeMinutes: day.workerTimeMinutes,
        description: day.description,
        job: await day.job,
        equipement: await day.equipement,
        equipmentTimeMinutes: day.equipmentTimeMinutes
    };
}

export default formatDay

