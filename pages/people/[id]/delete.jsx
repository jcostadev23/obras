import Layout from "@/components/layout"
import CustomButton from "@/components/button"
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { People } from "@/src/models";
import getPeople from "/helpers/GetPeople"
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
                    <CustomButton link={"/people/"} text={"Exit"} color={"green"} />
                </PersonCard>
            </Grid>
        </Layout>
    )
}
export default PersonDetails

