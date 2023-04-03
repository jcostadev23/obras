import { Calendar, People, Job, Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import React from "react";
import { Card, Collection, Grid, Heading, Link } from "@aws-amplify/ui-react";
import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "Calendar", url: "/calendar" },
];

export default function CallCalendar() {
    const [mycalendar, setMycalendar] = useState([])
    const [callday, setCallday] = useState("")
    const onCalendarChange = (e) => {
        setCallday(e.target.value)
    }

    useEffect(() => {
        async function GetDays() {
            try {
                const days = await DataStore.query(Calendar);
                console.log("teste1.1", days)
                const promisedetals = await Promise.all(days.map(async (daysofCalendar) => {
                    return {
                        day: daysofCalendar.day,
                        id: daysofCalendar.id,
                        people: await daysofCalendar.people,
                        job: await daysofCalendar.job,
                        equipement: await daysofCalendar.equipement,
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
            <Collection items={mycalendar} isPaginated itemsPerPage={10}>
                {(days) => {
                    return <div><Grid>
                        <Card variation="elevated" key={days.day}>
                            <Heading>{days.day}</Heading>
                            <div>People: {days.day.name}</div>
                            {days.job && <div>Job: {days.job.name}</div>}
                            {days.equipement && <div>Equipement: {days.equipement.name}</div>}
                            <div><Link href={"/calendar/" + days.id + "/delete"}>Delete</Link></div>
                        </Card>
                    </Grid></div>
                }}
            </Collection>
        </Layout>
    )
}
