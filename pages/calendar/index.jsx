import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../components/layout"
import Breadcrumb from "../../components/breadcrumb"
import CalendarList from "../../components/calendarlist";
import formatDay from "../../helpers/formatDay"
import { Button } from "@aws-amplify/ui-react";

const breadcrumbItems = [{ label: "Calendar" },
];

export default function CallCalendar() {
    const [mycalendar, setMycalendar] = useState([])

    useEffect(() => {
        async function GetDays() {
            try {
                const days = await DataStore.query(Calendar);
                const promisedetals = await Promise.all(days.map((day) => formatDay(day)));
                setMycalendar(promisedetals)
            } catch (error) {
                console.log("Error don't get the CallCalendar", error);
            }
        }
        GetDays()
    }, [])

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <CalendarList days={mycalendar} />
            <Button style={{ display: "flex", justifyContent: "center" }} className="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25" onClick={() => (window.location.href = "/")}>
                Add New Day</Button>
        </Layout>)
}
