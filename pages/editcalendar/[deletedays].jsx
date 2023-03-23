import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Calendar } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Card, Button, Link, Heading, Loader } from "@aws-amplify/ui-react";

function ItemDetails() {
    const { query, push } = useRouter()
    const Calendarid = query.deletedays
    const [day, setDay] = useState()
    console.log("teste", Calendarid)

    async function DeleteDays() {
        const postToDelete = await DataStore.query(Calendar, Calendarid);
        await DataStore.delete(postToDelete);
        push("/callcalendar")
    }

    useEffect(() => {
        async function Days() {
            try {
                const itemFromDatastore = await DataStore.query(Calendar, Calendarid);
                setDay(itemFromDatastore)
            } catch (error) { console.log("Item name on catch") }
        }

        if (!Calendarid) {
            return <Loader />
        }
        Days()
    }, [Calendarid])

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

                <Heading level={4}>{day.id}</Heading>
                <div>{day.people.name}</div>
                <div>{day.job.name}</div>
                <div>{day.equipement.name}</div>

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
