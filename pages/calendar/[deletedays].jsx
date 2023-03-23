import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Calendar } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Card, Button, Link, Heading, Loader } from "@aws-amplify/ui-react";

function ItemDetails() {
    const { query, push } = useRouter()
    const itemid = query.deletedays
    const [day, setDay] = useState()

    async function DeleteDays() {
        const postToDelete = await DataStore.query(Calendar, itemid);
        await DataStore.delete(postToDelete);
        push("/callcalendar")
    }

    useEffect(() => {
        async function Days() {
            try {
                const itemFromDatastore = await DataStore.query(Calendar, itemid);
                setDay(itemFromDatastore)
            } catch (error) { console.log("Itemname on catch") }
        }

        if (!itemid) {
            return
        }
        Days()
    }, [itemid])

    if (!day) {
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

                <Heading level={4}>{day.day}</Heading>
                <div>{day.people}</div>
                <div>{day.job}</div>
                <div>{day.equipement}</div>

                <Button
                    variation="destructive"
                    loadingText=""
                    onClick={DeleteDays}
                    ariaLabel=""
                >
                    Delete
                </Button>
                <div><Link href="/Callcalendar">Exit</Link></div>
            </Card>
        </Grid></div>
    </>
}
export default ItemDetails()
