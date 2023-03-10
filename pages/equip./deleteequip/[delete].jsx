import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Card, Button, Link, Heading, Loader } from "@aws-amplify/ui-react";

function ItemDetails() {

    const { query, push } = useRouter()
    const itemid = query.delete
    const [name, setName] = useState([])

    async function DeleteItem() {

        const postToDelete = await DataStore.query(Equipements, itemid);
        await DataStore.delete(postToDelete);
        push("/machines")
    }


    async function ItemName() {
        try {
            const itemFromDatastore = await DataStore.query(Equipements, itemid);
            setName(itemFromDatastore)

            console.log("Posts retrieved successfully!", JSON.stringify(itemFromDatastore, null, 2));
        } catch (error) {
            console.log("Error retrieving posts", error);
        }
    }
    useEffect(() => {
        if (!itemid) {
            return
        }
        ItemName()
    }, [itemid])

    if (!name) {
        return <Loader />
    }

    return <>
        <SiteMenu />
        <div className="container mx-auto"> <Grid>
            <Alert
                variation="warning"
                isDismissible={false}
                hasIcon={true}
                heading="Atenttion"
            >
                This will delete the Job
            </Alert>
            <Card variation="elevated">

                <Heading level={4}>{name.Name}</Heading>
                <div>{name.Attachments}</div>

                <Button
                    variation="destructive"
                    loadingText=""
                    onClick={DeleteItem}
                    ariaLabel=""
                >
                    Delete
                </Button>
                <div><Link href="/machines">Exit</Link></div>
            </Card>
        </Grid></div>
    </>
}
export default ItemDetails
