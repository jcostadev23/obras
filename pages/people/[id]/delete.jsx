import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { People } from "@/src/models";
import getPeople from "../../../helpers/getPeople"
import { DataStore } from "aws-amplify";
import { Grid, Alert, Loader, Button } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
import PersonCard from "@/components/personcard"
const breadcrumbItems = [{ label: "People", url: "/people" }, { label: "Delete" }
];

function PersonDetails() {
    const { query, push } = useRouter()
    const personid = query.id
    const [person, setPerson] = useState()

    async function DeletePerson() {
        const personToDelete = await DataStore.query(People, personid);
        await DataStore.delete(personToDelete);
        push("/people")
    }
    useEffect(() => {
        if (!personid) {
            return
        }
        getPeople(personid)
            .then(personFromDB => {
                setPerson(personFromDB)
            })
    }, [personid])

    if (!person) {
        return <Loader />
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                <Alert
                    variation="warning"
                    isDismissible={false}
                    hasIcon={true}
                    heading="Atenttion"
                >
                    This will delete the user
                </Alert>
                <PersonCard person={person}>
                    <Button className="my-5"
                        variation="destructive"
                        loadingText=""
                        onClick={DeletePerson}
                        ariaLabel=""
                    >
                        Delete
                    </Button>{"  "}
                    <Button style={{ display: "flex", justifyContent: "center" }} label="Edit" class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25" onClick={() => (window.location.href = "/people")}>
                        Exit</Button>
                </PersonCard>
            </Grid>
        </Layout>
    )
}
export default PersonDetails

