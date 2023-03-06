import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PeopleUpdateForm from "@/src/ui-components/PeopleUpdateForm";
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Card, Heading, Loader } from "@aws-amplify/ui-react";

function peopledetails() {
    const { query } = useRouter()
    const personid = query.peopleid
    const [person, setPerson] = useState()

    async function getperson() {
        try {
            const personFromDatastore = await DataStore.query(People, personid);
            setPerson(personFromDatastore)

            console.log("Posts retrieved successfully!", JSON.stringify(personFromDatastore, null, 2));
        } catch (error) {
            console.log("Error retrieving posts", error);
        }
    }

    useEffect(() => {

        if (!personid) {
            return
        }
        getperson()
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
                <PeopleUpdateForm id={personid} />
            </Card>
        </Grid>
    </>
}

export default peopledetails