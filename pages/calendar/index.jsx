import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Link, Grid, Collection } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import React from "react";
import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
import CustomButton from "@/components/button"
import CalendarList from "../../components/helpers/calendarlist";
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
            <Collection items={mycalendar} isPaginated itemsPerPage={10} isSearchable>
                {(days) => {
                    return <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                        <CalendarList props={days} >
                            <Link style={{ display: "flex", justifyContent: "center" }} class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-red-400 to-red-700 leading-pro text-xs ease-soft-in 
                            tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                href={"/calendar/" + days.id + "/delete"}>Delete</Link>
                        </CalendarList>
                    </Grid>
                }}
            </Collection>
            <CustomButton color={"green"} link={"/calendar/create/"} text={"Add New Day"} />
        </Layout>)
}
