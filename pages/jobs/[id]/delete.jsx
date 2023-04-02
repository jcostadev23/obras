import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Card, Button, Link, Heading, Loader } from "@aws-amplify/ui-react";

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
                console.log("Posts retrieved successfully!", JSON.stringify(JobFromDatastore, null, 2));
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
            <div className="container mx-auto"> <Grid>
                <Alert
                    variation="warning"
                    isDismissible={false}
                    hasIcon={true}
                    heading="Atenttion"
                >
                    This will delete the Job
                </Alert>
                <Card variation="elevated">

                    <Heading level={4}>{name.name}</Heading>
                    <div>{name.address}</div>

                    <Button
                        variation="destructive"
                        loadingText=""
                        onClick={DeleteJob}
                        ariaLabel=""
                    >
                        Delete
                    </Button>
                    <div><Link href="/jobs">Exit</Link></div>
                </Card>
            </Grid></div>
        </Layout>
    )
}
export default JobDetails