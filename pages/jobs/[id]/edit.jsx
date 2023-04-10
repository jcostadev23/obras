import Layout from "@/components/layout"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Loader } from "@aws-amplify/ui-react";
import JobUpdateForm from "@/src/ui-components/JobUpdateForm";
import Breadcrumb from "@/components/breadcrumb"
import JobCard from "@/components/jobcard";
const breadcrumbItems = [{ label: "Jobs", url: "/jobs" }, { label: "Edit" }
];

export default function EditJobs() {
    const router = useRouter()
    const jobid = router.query.id
    const [job, setJob] = useState()

    useEffect(() => {
        async function JobName() {
            try {
                const joblist = await DataStore.query(Job, jobid);
                setJob(joblist)
                console.log("Job retrieved successfully!");
            } catch (error) {
                console.log("Error retrieving Job", error);
            }
        }
        if (!jobid) {
            return
        }
        JobName()
    }, [jobid])
    if (!job) {
        return <Loader />
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                <JobCard job={job}>
                    <JobUpdateForm id={jobid}
                        onSuccess={() => router.reload()} />
                </JobCard>
            </Grid>

        </Layout>
    )
}
