import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PeopleUpdateForm from "@/src/ui-components/PeopleUpdateForm";
import getPeople from "/helpers/getPeople"
import { Grid, Loader } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
import PersonCard from "@/components/personcard"

const breadcrumbItems = [{ label: "People", url: "/people" }, { label: "Edit" }
];

export default function EditPersonDetails() {
    const router = useRouter()
    const personid = router.query.id
    const [person, setPerson] = useState()

    useEffect(() => {
        if (!personid) { return }

        getPeople(personid)
            .then(personFromDB => {
                setPerson(personFromDB);
            });
    }, [personid])

    if (!person) { return <Loader /> }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                <PersonCard person={person}>
                    <PeopleUpdateForm id={personid}
                        onSuccess={() => router.reload()} />
                </PersonCard>
            </Grid>
        </Layout>
    )
}

