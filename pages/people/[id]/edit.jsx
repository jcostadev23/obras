import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PeopleUpdateForm from "@/src/ui-components/PeopleUpdateForm";
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Card, Heading, Loader } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "People", url: "/people" }, { label: "Edit" }
];
export default function PeopleDetails() {
    const router = useRouter()
    const personid = router.query.id
    const [person, setPerson] = useState()

    useEffect(() => {
        async function GetPerson() {
            try {
                const personFromDatastore = await DataStore.query(People, personid);
                setPerson(personFromDatastore)
                console.log("Person retrieved successfully!", JSON.stringify(personFromDatastore, null, 2));
            } catch (error) {
                console.log("Error retrieving Person", error);
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

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Grid>
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

        </Layout>
    )
}

