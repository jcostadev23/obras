import Layout from "@/components/layout"
import CustomButton from "@/components/helpers/button"
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Card, Heading, Loader, Button } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
import JobCard from "../../../components/helpers/jobcard";
const breadcrumbItems = [{ label: "Jobs", url: "/jobs" }, { label: "Delete" }
];

function JobDetails() {
    const { query, push } = useRouter()
    const jobid = query.id
    const [name, setName] = useState()

    async function DeleteJob() {
        const jobToDelete = await DataStore.query(Job, jobid);
        await DataStore.delete(jobToDelete);
        push("/jobs")
    }

    useEffect(() => {
        async function JobName() {
            try {
                const JobFromDatastore = await DataStore.query(Job, jobid);
                setName(JobFromDatastore)
                console.log("Posts retrieved successfully!");
            } catch (error) {
                console.log("Error retrieving posts", error);
            }
        }

        if (!jobid) {
            return
        }
        JobName()
    }, [jobid])

    if (!name) {
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
                <JobCard props={name}>
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
export default JobDetails