import { Calendar, People, Job, Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import React from "react";
import { Card, Grid, Heading, Link } from "@aws-amplify/ui-react";
import Layout from "@/components/layout"

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
            <Grid>
                {mycalendar.map((item) => (
                    <Card variation="elevated" key={item.id}>
                        <Heading>day: {item.day}</Heading>
                        <div>people: {item.people.name}</div>
                        {item.job && <div>job: {item.job.name}</div>}
                        {item.equipement && <div>equipement: {item.equipement.name}</div>}
                        <div><Link href={"/calendar/" + item.id + "/delete"}>Delete</Link></div>
                    </Card>
                ))}
            </Grid>
        </Layout>
    )
}
