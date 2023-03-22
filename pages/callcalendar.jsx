import { Calendar, People, Job, Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import React from "react";
import { Card } from "@aws-amplify/ui-react";
import SiteMenu from "@/components/menu";
export default function CallCalendar() {
    const [mycalendar, setMycalendar] = useState([])
    const [callday, setCallday] = useState("")
    const onCalendarChange = (e) => {
        setCallday(e.target.value)
    }
    useEffect(() => {
        async function GetDays() {

            try {
                const days = await DataStore.query(Calendar,);
                const promisedetals = await Promise.all(days.map(async (daysofCalendar) => {
                    return {
                        day: daysofCalendar.day,
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

    return (<>
        <SiteMenu
        /><Card>
            {mycalendar.map((item) => (
                <li key={item.id}>
                    <div>day: {item.day}</div>
                    <div>people: {item.people.name}</div>
                    <div>job: {item.job.name}</div>
                    <div>equipement: {item.equipement.name}</div>
                </li>
            ))}
        </Card>
    </>
    )
}
