import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PeopleUpdateForm from "@/src/ui-components/PeopleUpdateForm";
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Loader } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
import PersonCard from "@/components/helpers/personcard"

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
            <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                <PersonCard props={person}>
                    <PeopleUpdateForm id={personid}
                        onSuccess={() => router.reload()} />
                </PersonCard>
            </Grid>

        </Layout>
    )
}

