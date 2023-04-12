import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Link, Grid, Collection } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import React from "react";
import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
import CustomButton from "@/components/button"
import CalendarList from "../../components/calendarlist";
const breadcrumbItems = [{ label: "Calendar" },
];

export default function CallCalendar() {
    const [mycalendar, setMycalendar] = useState([])

    useEffect(() => {
        async function GetDays() {
            try {
                const days = await DataStore.query(Calendar);
                const promisedetals = await Promise.all(days.map(async (daysofCalendar) => {
                    return {
                        day: daysofCalendar.day,
                        id: daysofCalendar.id,
                        people: await daysofCalendar.people,
                        workerTimeMinutes: daysofCalendar.workerTimeMinutes,
                        description: daysofCalendar.description,
                        job: await daysofCalendar.job,
                        equipement: await daysofCalendar.equipement,
                        equipmentTimeMinutes: daysofCalendar.equipmentTimeMinutes
                    };
                })
                )
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
            <CalendarList props={mycalendar} />
            <CustomButton color={"green"} link={"/calendar/create/"} text={"Add New Day"} />
        </Layout>)
}
