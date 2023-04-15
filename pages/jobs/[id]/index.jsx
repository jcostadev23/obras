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

const breadcrumbItems = [{ label: "Jobs", url: "/jobs" }, { label: "Job Info" }
];

export default function JobInfo() {
    const [job, setJob] = useState()
    const router = useRouter()
    const jobId = router.query.id

    useEffect(() => {
        async function JobDetails() {
            try {
                const days = await DataStore.query(Calendar, (c) => c.calendarJobId.eq(jobId));
                const daysInfo = await Promise.all(days.map((day) => formatDays(day)));
                setJob(daysInfo)
            } catch (error) {
                console.log("Error don't get the JobDetails", error);
            }
        }
        if (jobId) {
            JobDetails()
        }
    }, [jobId])

    if (!job) {
        return <Loader />
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <CalendarList props={job} />
            <CustomButton color={"green"} link={"/jobs/"} text={"Return"} />
        </Layout>
    )
}