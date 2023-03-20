import { Calendar, People, Job, Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import React from "react";
import { Card } from "@aws-amplify/ui-react";

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
                setPeople(days)



                console.log("estou no promise", promisedetals)
            } catch (error) {
                console.log("Error don't get the callday", error);
            }
            const promisedetals = await Promise.all(people.map(async (daysofCalendar) => {

                return {
                    day: daysofCalendar.day,
                    people: await daysofCalendar.people,
                    job: await daysofCalendar.job,
                    equipement: await daysofCalendar.equipement,
                };

            }
            ))
            setMycalendar(promisedetals)


            console.log("test1")

        }
        GetDays()
    }, [])
    setMycalendar(promisedetals)

    console.log(people)
    console.log("test4.1")
    console.log("mycalendar", mycalendar)
    console.log(models)


    return (<><div> {mycalendar.map((item) => (
        <li key={item.id}>
            <p>day: {item.day}</p>
            <p>people: {item.people}</p>
            <p>job: {item.job}</p>
            <p>equipement: {item.equipement}</p>

            <p>id: {item.id}</p>

        </li>
    ))}
        <Card>{models}</Card>



    </div>

    </>
    )
}
