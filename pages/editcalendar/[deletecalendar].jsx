import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Calendar } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Card, Button, Link, Heading, Loader } from "@aws-amplify/ui-react";

function ItemDetails() {
    console.log("teste 1")
    const { query, router } = useRouter()
    const calendarId = query.deletecalendar
    const [day, setDay] = useState()
    console.log("teste2", calendarId)

    async function DeleteDays() {
        const postToDelete = await DataStore.query(Calendar, calendarId);
        await DataStore.delete(postToDelete);
        push("/callcalendar")
    }
    console.log("teste3")

    useEffect(() => {
        async function Days() {
            try {
                const itemFromDatastore = await DataStore.query(Calendar, calendarId);
                setDay(itemFromDatastore)
            } catch (error) { console.log("Item name on catch") }
        }

        if (!calendarId) {
            return <Loader />
        }
        Days()
    }, [calendarId])

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
export default ItemDetails