import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import React from "react";
import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
import CustomButton from "@/components/button"
import CalendarList from "../../components/calendarlist";
import formatDays from "../../helpers/daysformat";

const breadcrumbItems = [{ label: "Calendar" },
];

export default function CallCalendar() {
    const [mycalendar, setMycalendar] = useState([])

    useEffect(() => {
        async function GetDays() {
            try {
                const days = await DataStore.query(Calendar);
                const promisedetals = await Promise.all(days.map((day) => formatDays(day)));
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
            <CalendarList calendarlist={mycalendar} />
            <CustomButton color={"green"} link={"/calendar/create/"} text={"Add New Day"} />
        </Layout>)
}
