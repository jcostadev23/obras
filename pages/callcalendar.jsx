import { Calendar } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";

export default function CallCalendar() {
    const [mycalendar, setMycalendar] = useState([])
    const [callday, setCallday] = useState("")
    const onCalendarChange = (e) => {
        setMycalendar(e.target.value)
        console.log("aqui em sima")
    }
    useEffect(() => {
        async function GetDays() {
            console.log("cheguei a function callday")
            try {
                const days = await DataStore.query(Calendar, c => c.day.contains(callday,));
                setMycalendar(days)
                console.log("My calendar", JSON.stringify(days, null, 2));
            } catch (error) {
                callday, console.log("Error don't get the callday", error);
            }

        }
        GetDays


    }, [callday])

    return ("hello",
        <><div> {mycalendar} </div><div>{callday}</div></>)
}