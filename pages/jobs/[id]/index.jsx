import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import React from "react";
import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
import CalendarList from "../../../components/calendarlist";
import { useRouter } from "next/router"
import formatDay from "../../../helpers/formatDay"
import { Loader } from "@aws-amplify/ui-react";
import CalculateHours from "../../../components/calculatehours";
import { Button, } from "@aws-amplify/ui-react";

const breadcrumbItems = [{ label: "Jobs", url: "/jobs" }, { label: "Job Info" }
];

export default function JobInfo() {
    const [jobcalendar, setJobcalendar] = useState()
    const router = useRouter()
    const jobId = router.query.id

    useEffect(() => {
        async function jobDetails() {
            try {
                const days = await DataStore.query(Calendar, (c) => c.calendarJobId.eq(jobId));
                const daysInfo = await Promise.all(days.map((day) => formatDay(day)));
                setJobcalendar(daysInfo)
            } catch (error) {
                console.log("Error don't get the JobDetails", error);
            }
        }
        if (jobId) {
            jobDetails()
        }
    }, [jobId])

    if (!jobcalendar) {
        return <Loader />
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <CalendarList days={jobcalendar} />
            <CalculateHours arrayofdays={jobcalendar} />
            <Button style={{ display: "flex", justifyContent: "center" }} label="Edit" className="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25" onClick={() => (window.location.href = "/jobs")}>
                Return</Button>
        </Layout>
    )
}