import JobCreateForm from "@/src/ui-components/JobCreateForm";
import { useCallback, useEffect, useState } from "react";
import { Card, Heading, Grid, } from "@aws-amplify/ui-react";
import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";

export default function NewJob() {
    const [jobname, setJobname] = useState([])
    const [jobserch, setJobserch] = useState("")
    const onPeopleChange = (e) => {
        setJobserch(e.target.value)
    }

    async function Findjob() {
        try {
            const serchjob = await DataStore.query(Job, c => c.name.contains(jobserch,));
            setJobname(serchjob)

            console.log("Posts retrieved successfully!", JSON.stringify(serchjob, null, 2));
        } catch (error) {
            jobserch,
                console.log("Error retrieving posts", error);
        }
    }

    useEffect(() => {

        Findjob()

    }, [Findjob])

    return <div>

        <Grid>
            {jobname.map((user) => {
                return (
                    <Card variation="elevated" key={user.id}>
                        <Heading level={4}>{user.name}</Heading>
                        <div>{user.address}</div>

                    </Card>
                )
            })}
        </Grid>
        <Grid>
            <Card variation="elevated" >
                <Heading level={4}>{"ADD Jobs"}</Heading>
                <JobCreateForm
                />  </Card>
        </Grid>

    </div>


}
