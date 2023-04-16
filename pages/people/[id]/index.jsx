import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Button, Loader } from "@aws-amplify/ui-react";
import { useEffect, useState, } from "react";
import React from "react";
import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
import CalendarList from "../../../components/calendarlist";
import CalculateHours from "../../../components/calculatehours";
import { useRouter } from "next/router"
import formatDays from "../../../helpers/daysformat";

const breadcrumbItems = [{ label: "People", url: "/people" }, { label: "Person Info" }
];

export default function PersonInfo() {
    const [personcalendar, setPersoncalendar] = useState()
    const router = useRouter()
    const personId = router.query.id
    const [startdate, setStartdate] = useState()
    const [enddate, setEnddate] = useState()

    const handleStartDateChange = (e) => {
        setStartdate(e.target.value);
    };
    const handleEndDateChange = (e) => {
        setEnddate(e.target.value);
    };

    useEffect(() => {
        async function personDetails() {
            try {
                const days = await DataStore.query(Calendar, (c) => c.calendarPeopleId.eq(personId));
                const daysInfo = await Promise.all(days.map((day) => formatDays(day)));
                setPersoncalendar(daysInfo)
            } catch (error) {
                console.log("Error don't get the GetDetails", error);
            }
        }
        if (personId) {
            personDetails()
        }
    }, [personId])

    if (!personcalendar) {
        return <Loader />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <CalendarList calendarlist={personcalendar} />
            <form onSubmit={handleSubmit} className="bg-gray-200 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2">Calculate the Hours</h2>
                <div className="flex space-x-4">
                    <label className="flex-1">
                        <span className="block mb-1">Start Date:</span>
                        <input
                            type="date"
                            value={startdate}
                            onChange={handleStartDateChange}
                            className="w-full rounded-md border-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </label>
                    <label className="flex-1">
                        <span className="block mb-1">End Date:</span>
                        <input
                            type="date"
                            value={enddate}
                            onChange={handleEndDateChange}
                            className="w-full rounded-md border-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </label>
                </div>
                <CalculateHours arrayofdays={personcalendar} startDate={startdate} endDate={enddate} />
            </form>
            <Button style={{ display: "flex", justifyContent: "center" }} label="Delete" class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-300 to-green-400 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                onClick={() => window.location.href = "/people/"}>Return</Button>
        </Layout>
    )
}