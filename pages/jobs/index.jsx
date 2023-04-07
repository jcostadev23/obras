
import { useEffect, useState } from "react";
import { Card, Heading, Grid, Link, Collection } from "@aws-amplify/ui-react";
import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";
import Layout from "@/components/layout"
import CustomButton from "@/components/helpers/button"
import * as React from 'react';
import Breadcrumb from "@/components/breadcrumb"

const breadcrumbItems = [{ label: "Jobs" },
];

export default function NewJob() {
    const [jobname, setJobname] = useState([])
    const [jobserch, setJobserch] = React.useState("")
    const onJobChange = (e) => {
        setJobserch(e.target.value)
    }

    useEffect(() => {
        async function Findjob() {
            try {
                const serchjob = await DataStore.query(Job, c => c.name.contains(jobserch,));
                setJobname(serchjob)

                console.log("Jobs retrieved successfully!", JSON.stringify(serchjob, null, 2));
            } catch (error) {
                jobserch,
                    console.log("Error retrieving Jobs", error);
            }
        }

        Findjob()

    }, [jobserch,])

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />

            <Collection items={jobname} isPaginated itemsPerPage={10} isSearchable>
                {(job) => {
                    return <Grid>
                        <Card variation="elevated" key={job.name}>
                            <Heading>{job.name}</Heading>
                            <div>Address: {job.address}</div>
                            <Link href={"/jobs/" + job.id + "/edit"}>Edit</Link>
                            <Link href={"/jobs/" + job.id}>Job Info</Link>
                            <Link href={"/jobs/" + job.id + "/delete"}>Delete</Link>
                        </Card>
                    </Grid>
                }}
            </Collection>
            <CustomButton link={"/jobs/create/"} color={"green"} text={"Create Jobs"} />
        </Layout>
    )
}
