import Layout from "@/components/layout"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Card, Heading, Loader } from "@aws-amplify/ui-react";
import JobUpdateForm from "@/src/ui-components/JobUpdateForm";
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "Jobs", url: "/jobs" }, { label: "Edit" }
];

export default function EditJobs() {
    const router = useRouter()
    const jobid = router.query.id
    const [name, setName] = useState()

    useEffect(() => {
        async function JobName() {
            try {
                const joblist = await DataStore.query(Job, jobid);
                setName(joblist)
                console.log("Job retrieved successfully!", JSON.stringify(joblist, null, 2));
            } catch (error) {
                console.log("Error retrieving Job", error);
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
            <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                <Card variation="elevated">
                    <Heading level={4}>{name.name}</Heading>
                    <div>{name.address}</div>
                </Card>
            </Grid>
            <Grid>
                <Card variation="elevated">
                    <JobUpdateForm id={jobid}
                        onSuccess={() => router.reload()} />
                </Card>
            </Grid>
        </Layout>
    )
}
