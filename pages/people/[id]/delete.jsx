import Layout from "@/components/layout"
import CustomButton from "@/components/button"
import PersonCard from "@/components/personcard"
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { People } from "@/src/models";
import getPeople from "/helpers/get-people"
import { DataStore } from "aws-amplify";
import { Grid, Alert, Loader, Button } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "People", url: "/people" }, { label: "Delete" }
];

function ItemDetails() {
    const { query, push } = useRouter()
    const personid = query.id
    const [people, setPeople] = useState()

    async function DeleteItem() {
        const postToDelete = await DataStore.query(People, personid);
        await DataStore.delete(postToDelete);
        push("/people")
    }
    useEffect(() => {
        if (!personid) {
            return
        }
        getPeople(personid)
            .then(personFromDB => {
                setPeople(personFromDB)
            })
    }, [personid])

    if (!people) {
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
                <PersonCard person={people}>
                    <Button className="my-5"
                        variation="destructive"
                        loadingText=""
                        onClick={DeleteItem}
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
export default ItemDetails

