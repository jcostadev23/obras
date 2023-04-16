import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import React from "react";
import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
import CustomButton from "@/components/button"
import CalendarList from "../../../components/calendarlist";
import { useRouter } from "next/router"
import formatDays from "../../../helpers/daysformat";
import { Loader } from "@aws-amplify/ui-react";
import CalculateHours from "../../../components/calculatehours";

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
                const daysInfo = await Promise.all(days.map((day) => formatDays(day)));
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
            <CalendarList calendarlist={jobcalendar} />
            <CalculateHours arrayofdays={jobcalendar} />
            <CustomButton color={"green"} link={"/jobs/"} text={"Return"} />
        </Layout>
    )
}