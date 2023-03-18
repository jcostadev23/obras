import { Calendar, People, Job, Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import React from "react";

export default function CallCalendar() {
    const [mycalendar, setMycalendar] = useState([])
    const [callday, setCallday] = useState("")
    const [person, setPerson] = useState()
    const [models, setModels] = useState([])
    const onCalendarChange = (e) => {
        setCallday(e.target.value)

        console.log("aqui em sima")
    }
    console.log("useeffect")
    useEffect(() => {
        async function GetDays() {
            console.log("cheguei a function callday")
            try {
                const days = await DataStore.query(Calendar,);
                setMycalendar(days)
                console.log("My calendar", JSON.stringify(days, null, 2));
            } catch (error) {
                console.log("Error don't get the callday", error);
            }
            console.log("test2.1")
            const pessoa = await DataStore.query(People, c => c.name.contains(mycalendar))
            setPerson(pessoa)
            console.log(pessoa)
            console.log("test2")


        }
        GetDays()




    }, [])
    console.log("test3")

    useEffect(() => {
        async function fetchData() {

            DataStore.query(Calendar),
                DataStore.query(People),
                DataStore.query(Job),
                DataStore.query(Equipements)

            console.log("test4")


        }


        fetchData();
    }, []);
    console.log("test4.1")
    console.log(models)







    console.log(mycalendar)
    console.log("test5")
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
