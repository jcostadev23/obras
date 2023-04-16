import Layout from "@/components/layout";
import CustomButton from "@/components/button";
import { useRouter } from "next/router";
import { useEffect, useState, } from "react";
import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Loader, Button } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb";
import JobCard from "../../../components/jobcard";
import getJob from "/helpers/get-jobs";

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
        getJob(jobid)
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
                    <CustomButton link={"/jobs/"} color={"green"} text={"Exit"} />
                </JobCard>
            </Grid>
        </Layout>
    )
}
