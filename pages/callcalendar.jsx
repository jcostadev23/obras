import { Calendar, People, Job, Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import React from "react";

export default function CallCalendar() {
    const [mycalendar, setMycalendar] = useState([])
    const [callday, setCallday] = useState("")
    const [people, setPeople] = useState([])
    const [models, setModels] = useState([])
    const onCalendarChange = (e) => {
        setCallday(e.target.value)
    }
    console.log("useeffect")
    useEffect(() => {
        async function GetDays() {
            console.log("cheguei a function callday")
            try {
                const days = await DataStore.query(Calendar,);
                setMycalendar(days)

                const person = await mycalendar[0].people
                setPeople(person)
                console.log(person)

            } catch (error) {
                console.log("Error don't get the callday", error);

            }
        }
        GetDays()
    }, [])

    console.log(models)
    console.log("test4.1")

    console.log(mycalendar)

    return (<><div> {mycalendar.map((item) => (
        <li key={item.id}>
            <p>day: {item.day}</p>
            <p>people: {item.calendarPeopleId}</p>
            <p>job: {item.calendarJobId}</p>
            <p>equipement: {item.calendarEquipementId}</p>
            <p>job: {item.id}</p>

        </li>
    ))}


    </div>

    </>
    )
}
