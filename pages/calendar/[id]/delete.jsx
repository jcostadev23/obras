import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Calendar } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Card, Button, Link, Heading, Loader } from "@aws-amplify/ui-react";

export default function ItemDetails() {
    console.log("teste 1")
    const { query, push } = useRouter()
    const calendarid = query.id
    const [day, setDay] = useState()

    async function DeleteDays() {
        const postToDelete = await DataStore.query(Calendar, calendarid);
        await DataStore.delete(postToDelete);
        push("/calendar")
    }

    useEffect(() => {
        async function Days() {
            try {
                const itemFromDatastore = await DataStore.query(Calendar, calendarid);
                setDay(itemFromDatastore)
            } catch (error) { console.log("Item name on catch") }
        }

        calendarid && Days()

    }, [calendarid])

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
                This will delete the Day
            </Alert>
            <Grid>
                <Card variation="elevated" key={day.id}>
                    <Heading>day: {day.day}</Heading>
                    <div>id: {day.id} </div>
                </Card>
            </Grid>
            <Card variation="elevated">
                <Button
                    variation="destructive"
                    loadingText=""
                    onClick={DeleteDays}
                    ariaLabel=""
                >
                    Delete
                </Button>
                <div><Link href="/calendar">Exit</Link></div>
            </Card>
        </Grid></div>
    </>
}
