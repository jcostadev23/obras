import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import React from "react";
import { Card, Collection, Button, Grid, Heading, Link } from "@aws-amplify/ui-react";
import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "Calendar" },
];

export default function CallCalendar() {
    const [mycalendar, setMycalendar] = useState([])

    useEffect(() => {
        async function GetDays() {
            try {
                const days = await DataStore.query(Calendar);
                const promisedetals = await Promise.all(days.map(async (daysofCalendar) => {
                    return {
                        day: daysofCalendar.day,
                        id: daysofCalendar.id,
                        people: await daysofCalendar.people,
                        workerTimeMinutes: daysofCalendar.workerTimeMinutes,
                        job: await daysofCalendar.job,
                        equipement: await daysofCalendar.equipement,
                        equipmentTimeMinutes: daysofCalendar.equipmentTimeMinutes
                    };
                })
                )
                setMycalendar(promisedetals)
            } catch (error) {
                console.log("Error don't get the callday", error);
            }
        }
        GetDays()
    }, [])
    console.log(mycalendar)

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Collection items={mycalendar} isPaginated itemsPerPage={10} isSearchable>
                {(days) => {
                    function FormatTime(minutes) {
                        const h = Math.floor(minutes / 60);
                        const remainingMinutes = minutes % 60;
                        let formatTime = `${h}h`;
                        {
                            remainingMinutes !== 0 && (
                                formatTime += `:${remainingMinutes}m`)
                        }
                        return (formatTime)
                    }

                    return <Grid>
                        <Card variation="elevated" key={days.id}>
                            <Heading>{days.day}</Heading>
                            <div>People: {days.people.name}</div>
                            {days.workerTimeMinutes && <div>Hours: {FormatTime(days.workerTimeMinutes)}</div>}
                            {days.job && <div>Job: {days.job.name}</div>}
                            {days.equipement && <div>Equipement: {days.equipement.name}</div>}
                            {/* need to do something to resole when is not hours selected */}
                            {days.equipmentTimeMinutes && <div>Equipement Hours: {FormatTime(days.equipmentTimeMinutes)}</div>}
                            <Link href={"/calendar/" + days.id + "/delete"}>Delete</Link>
                        </Card>
                    </Grid>
                }
                }
            </Collection>
            <Button>
                <Link href={"/calendar/create/"}>Add new day</Link>
            </Button>
        </Layout>
    )
}
