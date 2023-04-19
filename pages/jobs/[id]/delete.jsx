import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect, useState, } from "react";
import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Loader, Button } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb";
import JobCard from "../../../components/jobcard";
import getJobs from "../../../helpers/getJobs";

const breadcrumbItems = [{ label: "Jobs", url: "/jobs" }, { label: "Delete" }
];

export default function JobDetails() {
    const router = useRouter()
    const jobid = router.query.id
    const [job, setJob] = useState()

    async function DeleteJob() {
        const jobToDelete = await DataStore.query(Job, jobid);
        await DataStore.delete(jobToDelete);
        router.push("/jobs")
    }

    useEffect(() => {
        if (!jobid) {
            return
        }
        getJobs(jobid)
            .then(jobFromDB => {
                setJob(jobFromDB);
            });

    }, [jobid])

    if (!job) {
        return <Loader />
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg 
             bg-gradient-to-tl from-gray-400 to-gray-500 ">
                <Alert
                    variation="warning"
                    isDismissible={false}
                    hasIcon={true}
                    heading="Atenttion">
                    This will delete the Job
                </Alert>
                <JobCard job={job}>
                    <Button
                        variation="destructive"
                        loadingText=""
                        onClick={DeleteJob}
                        ariaLabel="">
                        Delete
                    </Button>{"  "}
                    <Button style={{ display: "flex", justifyContent: "center" }} label="Edit" class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25" onClick={() => (window.location.href = "/jobs")}>
                        Exit</Button>
                </JobCard>
            </Grid>
        </Layout>
    )
}
