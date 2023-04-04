import { Calendar, People, Job, Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import React from "react";
import { Card, Collection, Grid, Heading, Link } from "@aws-amplify/ui-react";
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

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Collection items={mycalendar} isPaginated itemsPerPage={10} isSearchable>
                {(days) => {
                    return <Grid>
                        <Card variation="elevated" key={days.id}>
                            <Heading>{days.day}</Heading>
                            <div>People: {days.people.name}</div>
                            {days.workerTimeMinutes && <div>Hours: {days.workerTimeMinutes / 60}</div>}
                            {days.job && <div>Job: {days.job.name}</div>}
                            {days.equipement && <div>Equipement: {days.equipement.name}</div>}
                            {days.equipmentTimeMinutes && <div>Hours: {days.equipmentTimeMinutes / 60}</div>}
                            <Link href={"/calendar/" + days.id + "/delete"}>Delete</Link>
                        </Card>
                    </Grid>
                }}
            </Collection>
        </Layout>
    )
}
