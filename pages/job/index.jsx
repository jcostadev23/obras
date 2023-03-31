
import { useEffect, useState } from "react";
import { Card, Heading, Grid, Link, SearchField, Button } from "@aws-amplify/ui-react";
import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";
import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import * as React from 'react';

export default function NewJob() {
    const router = useRouter()
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

    return <><SiteMenu />
        <SearchField
            type="text"
            onChange={(e) => {
                setJobserch(e.target.value)

            }
            } />
        <div>

            <Grid>
                {jobname.map((user) => {
                    return (
                        <Card variation="elevated" key={user.id}>
                            <Heading level={4}>{user.name}</Heading>
                            <div>{user.address}</div>
                            <Link href={"/job/" + user.id + "/edit"}>Edit</Link>
                            <div><Link href={"/job/" + user.id + "/delete"}>Delete</Link></div>

                        </Card>
                    );
                })}
            </Grid>
            <Button>
                <div> <Link href={"/job/create/"}>Create Job</Link>
                </div></Button>

        </div></>


}
