import Layout from "@/components/layout"
import CustomButton from "@/components/button"
import PersonCard from "@/components/personcard"
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Loader, Button } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "People", url: "/people" }, { label: "Delete" }
];

function ItemDetails() {
    const { query, push } = useRouter()
    const itemid = query.id
    const [person, setPerson] = useState()

    async function DeleteItem() {

        const postToDelete = await DataStore.query(People, itemid);
        await DataStore.delete(postToDelete);
        push("/people")
    }

    useEffect(() => {
        async function ItemName() {
            try {
                const itemFromDatastore = await DataStore.query(People, itemid);
                setPerson(itemFromDatastore)

                console.log("Person retrieved successfully!", JSON.stringify(itemFromDatastore, null, 2));
            } catch (error) {
                console.log("Error retrieving Person", error);
            }
        }

        if (!itemid) {
            return
        }
        ItemName()
    }, [itemid])

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

