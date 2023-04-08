import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Collection } from "@aws-amplify/ui-react";
import { useEffect, useState, } from "react";
import React from "react";
import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
import CustomButton from "@/components/helpers/button"
import CalendarList from "../../../components/helpers/calendarlist";
import { useRouter } from "next/router"
const breadcrumbItems = [{ label: "Jobs", url: "/jobs" }, { label: "Job Info" }
];

export default function JobInfo() {
    const [job, setJob] = useState()
    const router = useRouter()
    const jobId = router.query.id

    useEffect(() => {
        async function JobDetails() {
            try {
                const details = await DataStore.query(Calendar, (c) => c.calendarJobId.eq(jobId));
                const promisedetals = await Promise.all(details.map(async (JobInfo) => {
                    return {
                        day: JobInfo.day,
                        id: JobInfo.id,
                        people: await JobInfo.people,
                        workerTimeMinutes: JobInfo.workerTimeMinutes,
                        job: await JobInfo.job,
                        equipement: await JobInfo.equipement,
                        equipmentTimeMinutes: JobInfo.equipmentTimeMinutes
                    };
                })
                )
                setJob(promisedetals)
            } catch (error) {
                console.log("Error don't get the JobDetails", error);
            }
        }
        if (jobId) {
            JobDetails()
        }
    }, [jobId])
    if (!job) {
        return <div>Loading...</div>
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Collection items={job} isPaginated itemsPerPage={10} isSearchable>
                {(details) => {
                    return <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                        <CalendarList props={details} />
                    </Grid>
                }}
            </Collection>
            <CustomButton color={"green"} link={"/jobs/"} text={"Return"} />
        </Layout>
    )
}