import Layout from "@/components/layout"
import CustomButton from "@/components/helpers/button"
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Card, Heading, Loader, Button } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "People", url: "/people" }, { label: "Delete" }
];

function ItemDetails() {
    const { query, push } = useRouter()
    const itemid = query.id
    const [name, setName] = useState()

    async function DeleteItem() {

        const postToDelete = await DataStore.query(People, itemid);
        await DataStore.delete(postToDelete);
        push("/people")
    }

    useEffect(() => {
        async function ItemName() {
            try {
                const itemFromDatastore = await DataStore.query(People, itemid);
                setName(itemFromDatastore)

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

    if (!name) {
        return <Loader />
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <div className="container mx-auto"> <Grid>
                <Alert
                    variation="warning"
                    isDismissible={false}
                    hasIcon={true}
                    heading="Atenttion"
                >
                    This will delete the user
                </Alert>
                <Card variation="elevated">

                    <Heading level={4}>{name.name}</Heading>
                    <div>{name.phonenumber}</div>
                    <div>{name.role}</div>

                    <Button className="my-5"
                        variation="destructive"
                        loadingText=""
                        onClick={DeleteItem}
                        ariaLabel=""
                    >
                        Delete
                    </Button>
                    <CustomButton link={"/people/"} text={"Exit"} color={"green"} />
                </Card>
            </Grid></div>
        </Layout>
    )
}
export default ItemDetails

