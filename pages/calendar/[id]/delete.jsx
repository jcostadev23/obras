import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Calendar } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Loader, Button, Heading } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"

const breadcrumbItems = [{ label: "Calendar", url: "/calendar" }, { label: "Delete" }
];

export default function ItemDetails() {
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

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Grid className="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                <Alert
                    variation="warning"
                    isDismissible={false}
                    hasIcon={true}
                    heading="Atenttion">
                    This will delete the Day
                </Alert>
                <Heading class="text-xl text-center my-5 font-bold">{day.day}</Heading>
                <Button style={{ display: "flex", justifyContent: "center" }} label="Edit" className="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25" onClick={() => (window.location.href = "/calendar/")}>
                    Exit</Button>
                <Button style={{ display: "flex", justifyContent: "center" }} className="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-red-400 to-red-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                    onClick={DeleteDays}
                    ariaLabel="">
                    Delete
                </Button>
            </Grid>
        </Layout>
    )
}
