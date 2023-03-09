import JobCreateForm from "@/src/ui-components/JobCreateForm";
import { useEffect, useState } from "react";
import { Card, Heading, Grid, Link, SearchField } from "@aws-amplify/ui-react";
import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";
import SiteMenu from "@/components/menu";

export default function NewJob() {
    const [jobname, setJobname] = useState([])
    const [jobserch, setJobserch] = useState("")
    const onPeopleChange = (e) => {
        setJobserch(e.target.value)
    }

    useEffect(() => {
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
                            <Link href={"/jobsfile/" + user.id}>Edit</Link>
                            <div><Link href={"/jobsfile/deletejob/" + user.id}>Delete</Link></div>

                        </Card>
                    );
                })}
            </Grid>
            <Grid>
                <Card variation="elevated">
                    <Heading level={4}>{"ADD Jobs"}</Heading>
                    <JobCreateForm />  </Card>
            </Grid>

        </div></>


}
