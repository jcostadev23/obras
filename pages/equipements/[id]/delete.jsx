import Layout from "@/components/layout"
import CustomButton from "@/components/helpers/button"
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Card, Heading, Loader, Button } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "Equipements", url: "/equipements" }, { label: "Delete" }
];

export default function ItemDetails() {
    const { query, push } = useRouter()
    const itemid = query.id
    const [name, setName] = useState([])

    async function DeleteItem() {
        const postToDelete = await DataStore.query(Equipements, itemid);
        await DataStore.delete(postToDelete);
        push("/equipements")
    }

    useEffect(() => {
        async function ItemName() {
            try {
                const itemFromDatastore = await DataStore.query(Equipements, itemid);
                setName(itemFromDatastore)
                console.log("Posts retrieved successfully!", JSON.stringify(itemFromDatastore, null, 2));
            } catch (error) {
                console.log("Error retrieving posts", error);
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

    return (<div>
        <Layout>
            <div><Breadcrumb items={breadcrumbItems} /></div>
            <div className="container mx-auto"> <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                <Alert
                    variation="warning"
                    isDismissible={false}
                    hasIcon={true}
                    heading="Atenttion"
                >
                    This will delete the Job
                </Alert>
                <Card variation="elevated">
                    <Heading level={4}>{name.name}</Heading>
                    <div>{name.attachments}</div>
                    <Button
                        variation="destructive"
                        loadingText=""
                        onClick={DeleteItem}
                        ariaLabel="">
                        Delete
                    </Button>
                    <CustomButton color={"green"} link={"/equipements"} text={"Exit"} />
                </Card>
            </Grid></div>
        </Layout>
    </div>)
}

