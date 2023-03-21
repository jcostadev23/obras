import { Calendar, People, Job, Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import React from "react";
import { Card } from "@aws-amplify/ui-react";

export default function CallCalendar() {
    const [mycalendar, setMycalendar] = useState([])
    const [callday, setCallday] = useState("")
    const [models, setModels] = useState([])
    const onCalendarChange = (e) => {
        setCallday(e.target.value)
    }

    useEffect(() => {
        async function GetDays() {

            try {
                const days = await DataStore.query(Calendar,);
                setModels(days)
                const promisedetals = await Promise.all(models.map(async (daysofCalendar) => {
                    return {
                        day: daysofCalendar.day,
                        people: await daysofCalendar.people,
                        job: await daysofCalendar.job,
                        equipement: await daysofCalendar.equipement,
                    };
                }
                ))
                setMycalendar(promisedetals)
            } catch (error) {
                console.log("Error don't get the callday", error);
            }
        }
        GetDays()
    }, [])

    console.log("test4.1")
    console.log("mycalendar", mycalendar)

    return (<><div> {mycalendar.map((item, index) => (
        <li key={index}>
            <p>day: {item.day}</p>
            <p>people: {item.people}</p>
            <p>job: {item.job}</p>
            <p>equipement: {item.equipement}</p>

        </li>
    ))}
    </div>
    </>
    )
}
