import { Calendar, People, Job, Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import React from "react";
import { Card } from "@aws-amplify/ui-react";

export default function CallCalendar() {
    const [mycalendar, setMycalendar] = useState([])
    const [callday, setCallday] = useState("")
    const [models, setModels] = useState([])
    const [data, setData] = useState([])
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
                })
                )
                    setMycalendar(promisedetals)
            
                console.log("test1.names")
            } catch (error) {
                console.log("Error don't get the callday", error);
            }
        }
        GetDays()
    }, [])

    console.log("test4.1")
    console.log("mycalendar", mycalendar)

    console.log(data)

    return (<><div> 
    {mycalendar.map((item) => (
            <li key={item.id}>
                <div>day: {item.day}</div>
                <div>people: {item.people.name}</div>
                <div>job: {item.job.name}</div>
                <div>equipement: {item.equipement.name}</div>
                </li>
    ))}
    </div>
    </>
    )
}
