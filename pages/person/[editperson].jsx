import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PeopleUpdateForm from "@/src/ui-components/PeopleUpdateForm";
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Card, Heading, Loader } from "@aws-amplify/ui-react";

function PeopleDetails() {
    const { query, } = useRouter()
    const router = useRouter()
    const personid = query.editperson
    const [person, setPerson] = useState()


    useEffect(() => {
        async function GetPerson() {
            try {
                const personFromDatastore = await DataStore.query(People, personid);
                setPerson(personFromDatastore)

                console.log("Posts retrieved successfully!", JSON.stringify(personFromDatastore, null, 2));
            } catch (error) {
                console.log("Error retrieving posts", error);
            }
        }

        if (!personid) {
            return
        }
        GetPerson()
    }, [personid])

    if (!person) {
        return <Loader />
    }

    return <>
        <SiteMenu /><Grid>
            <Card variation="elevated">
                <Heading level={4}>{person.name}</Heading>
                <div>{person.phonenumber}</div>
                <div>{person.role}</div>
            </Card>
        </Grid>
        <Grid>
            <Card variation="elevated">
                <PeopleUpdateForm id={personid}
                    onSuccess={() => router.reload()} />
            </Card>
        </Grid>

    </>
}

export default PeopleDetails