import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Calendar } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Card, Button, Link, Heading, Loader } from "@aws-amplify/ui-react";

function ItemDetails() {
    console.log("teste 1")
    const { query, push } = useRouter()
    const calendarid = query.deletecalendar
    const [day, setDay] = useState()
    console.log("teste2", calendarid)

    async function DeleteDays() {
        const postToDelete = await DataStore.query(Calendar, calendarid);
        await DataStore.delete(postToDelete);
        push("/allcalendar")
    }
    console.log("teste3")

    useEffect(() => {
        async function Days() {
            try {
                const itemFromDatastore = await DataStore.query(Calendar, calendarid);
                setDay(itemFromDatastore)
            } catch (error) { console.log("Item name on catch") }
        }
        Days()
    }, [])

    if (!day) {
        return <Loader />
    }

    console.log("test3.1", day)


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
                {day.map((item) => (
                    <Card variation="elevated" key={item.id}>
                        <Heading>day: {item.day}</Heading>
                    </Card>
                ))}
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
                <div><Link href="/allcalendar">Exit</Link></div>
            </Card>
        </Grid></div>
    </>
}
export default ItemDetails