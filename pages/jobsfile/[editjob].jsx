import SiteMenu from "@/components/menu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Card, Heading, Loader } from "@aws-amplify/ui-react";
import JobUpdateForm from "@/src/ui-components/JobUpdateForm";

export default function EditJobs() {
    const { query, } = useRouter()
    const jobid = query.editjob
    const [name, setName] = useState()

    useEffect(() => {
        async function JobName() {
            try {
                const joblist = await DataStore.query(Job, jobid);
                setName(joblist)

                console.log("Posts retrieved successfully!", JSON.stringify(joblist, null, 2));
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

    return <>
        <SiteMenu /><Grid>
            <Card variation="elevated">
                <Heading level={4}>{name.name}</Heading>
                <div>{name.address}</div>
            </Card>
        </Grid>
        <Grid>
            <Card variation="elevated">
                <JobUpdateForm id={jobid} />
            </Card>
        </Grid>

    </>

}
