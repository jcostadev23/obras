import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Calendar } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Loader, Button } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
import CustomButton from "@/components/helpers/button"
import CalendarList from "../../../components/calendarlist";
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
            <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                <Alert
                    variation="warning"
                    isDismissible={false}
                    hasIcon={true}
                    heading="Atenttion">
                    This will delete the Day
                </Alert>

                <CalendarList props={day} >
                    <Button
                        variation="destructive"
                        loadingText=""
                        onClick={DeleteDays}
                        ariaLabel="">
                        Delete
                    </Button> {"  "}
                    <CustomButton color={"green"} link={"/calendar/"} text={"Exit"} />
                </CalendarList>
            </Grid>
        </Layout>
    )
}
