import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Card, Button, Link, Heading, Loader } from "@aws-amplify/ui-react";

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


    return <>
        <SiteMenu />
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

                <Button
                    variation="destructive"
                    loadingText=""
                    onClick={DeleteItem}
                    ariaLabel=""
                >
                    Delete
                </Button>
                <div><Link href="/people">Exit</Link></div>
            </Card>
        </Grid></div>
    </>
}
export default ItemDetails

